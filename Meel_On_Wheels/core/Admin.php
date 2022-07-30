<?php 

class Admin 
{
    private $conn;
    private $table = 'admin';

    //post properties 
    // public $caregiver_id;
    // public $firstname;
    // public $lastname;
    // public $birthday;
    // public $email;
    // public $password;
    // public $phonenumber;
    // public $address;
    // public $city;
    // public $nrc;
    // public $reason;
    // public $available_date;
    // public $created_at;


    // contructor with db connection
    public function __construct($db)
    {
        $this->conn = $db;
    }


    // getting caregivers from our database
    public function read() {
        //create query 
        $query = 'SELECT * FROM '. $this->table;

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //excute query
        $stmt->execute();

        return $stmt;
    }

    public function read_single(){
        $query = 'SELECT 
                * FROM ' .$this->table .'
               WHERE admin_id = ? LIMIT 1';

        
        //prepare statement
        $stmt = $this->conn->prepare($query);

        // binding param
        $stmt->bindParam(1, $this->id);
        // execute the query
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->admin_id = $row['admin_id'];
        $this->firstname = $row['firstname'];
        $this->lastname = $row['lastname'];
        $this->birthday = $row['birthday'];
        $this->email = $row['email'];
        $this->password = $row['password'];
        $this->phonenumber = $row['phonenumber'];   
        $this->available_date = $row['available_date'];
        $this->nrc = $row['nrc'];
        $this->created_at = $row['created_at'];

    }

    public function create(){
        //create query 
        $query = 'INSERT INTO ' .$this->table . ' (firstname, lastname, birthday, email, password, phonenumber, available_date, nrc) 
        VALUES 
        (:firstname, :lastname, :birthday, :email, :password, :phonenumber,:available_date, :nrc)';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data 
        $this->firstname = htmlspecialchars(strip_tags($this->firstname));
        $this->lastname = htmlspecialchars(strip_tags($this->lastname));
        $this->birthday = htmlspecialchars(strip_tags($this->birthday));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->password = htmlspecialchars(strip_tags($this->password));
        $this->phonenumber = htmlspecialchars(strip_tags($this->phonenumber));
        $this->available_date = htmlspecialchars(strip_tags($this->available_date));
        $this->nrc = htmlspecialchars(strip_tags($this->nrc));
       



        $stmt->bindParam(':firstname', $this->firstname);
        $stmt->bindParam(':lastname', $this->lastname);
        $stmt->bindParam(':birthday', $this->birthday);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':password', $this->password);
        $stmt->bindParam(':phonenumber', $this->phonenumber);
        $stmt->bindParam(':available_date', $this->available_date);
        $stmt->bindParam(':nrc', $this->nrc);
        


        // execute the query 
        if($stmt->execute()){
            return true;
        }
        
        //print error if something goes wrong
        printf("Error %s. \n", $stmt->error);
        return false;
        
    }


     // update post function
     public function update(){
        //create query 
        $query = 'UPDATE ' .$this->table. ' 
        SET firstname= :firstname, lastname = :lastname, birthday = :birthday, email = :email, password = :password, phonenumber = :phonenumber, available_date = :available_date, nrc = :nrc
        WHERE admin_id = :id';

        // var_dump($query);
        // die();

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data 
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->firstname = htmlspecialchars(strip_tags($this->firstname));
        $this->lastname = htmlspecialchars(strip_tags($this->lastname));
        $this->birthday = htmlspecialchars(strip_tags($this->birthday));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->password = htmlspecialchars(strip_tags($this->password));
        $this->phonenumber = htmlspecialchars(strip_tags($this->phonenumber));
        $this->available_date = htmlspecialchars(strip_tags($this->available_date));
        $this->nrc = htmlspecialchars(strip_tags($this->nrc));
        
        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':firstname', $this->firstname);
        $stmt->bindParam(':lastname', $this->lastname);
        $stmt->bindParam(':birthday', $this->birthday);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':password', $this->password);
        $stmt->bindParam(':phonenumber', $this->phonenumber);
        $stmt->bindParam(':available_date', $this->available_date);
        $stmt->bindParam(':nrc', $this->nrc);
  

        // execute the query 
        if($stmt->execute()){
            return true;
        }
        
        //print error if something goes wrong
        printf("Error %s. \n", $stmt->error);
        return false;
        
    }

    // delete function
    public function delete(){
        // create query 
        $query = 'DELETE FROM ' .$this->table . ' WHERE admin_id = :id';
        // prepare statement 
        $stmt = $this->conn->prepare($query);

        // clean the data 
        $this->id = htmlspecialchars(strip_tags($this->id));
        //binding the id parameter
        $stmt->bindParam(':id', $this->id);

        // execute the query 
        if($stmt->execute()){
            return true;
        }
        
        //print error if something goes wrong
        printf("Error %s. \n", $stmt->error);
        return false;
    }


    public function getSubmitMeal() {
        //create query 
        $query = 'SELECT 
            *
            FROM meals m WHERE m.status = ?';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        $this->status = "submited";
        $stmt->bindParam(1, $this->status);

        //excute query
        $stmt->execute();

        return $stmt;
    }

    public function approveMeal() {
        //create query 
        $query = 'UPDATE meals
        SET status = :status
        WHERE meal_id = :id';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data 
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->status = "approved";
  

        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':status', $this->status);


        // execute the query 
        if($stmt->execute()){
            return true;
        }
        
        //print error if something goes wrong
        printf("Error %s. \n", $stmt->error);
        return false;
    }

    public function getRegisterMember() {
        //create query 
        $query = 'SELECT 
            *
            FROM members WHERE approve = :approve';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        $this->approve = "pending";

        $stmt->bindParam(':approve', $this->approve);

        //excute query
        $stmt->execute();

        return $stmt;
    }

    public function approveMember() {
          //create query 
          $query = 'UPDATE members SET member_approve = :approve
          WHERE member_id = :id';
  
          // var_dump($query);
          // die();
  
          //prepare statement
          $stmt = $this->conn->prepare($query);
  
          //clean data 
          $this->id = htmlspecialchars(strip_tags($this->id));
          $this->approve = "accepted";
  
          $stmt->bindParam(':id', $this->id);
          $stmt->bindParam(':approve', $this->approve);
  
          // execute the query 
          if($stmt->execute()){
              return true;
          }
          
          //print error if something goes wrong
          printf("Error %s. \n", $stmt->error);
          return false;
    }

    public function sumDonation() {
        //create query 
        $query = 'SELECT SUM(amount) AS value_sum FROM  donators';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //excute query
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $sum = $row['value_sum'];

        return $sum;
    }

    public function sumCashOutDonation() {
        //create query 
        $query = 'SELECT SUM(cashout_amount) AS value_sum FROM  donators';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //excute query
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $sum = $row['value_sum'];

        return $sum;
    }

    public function getExpense() {
        //create query 
        $query = 'INSERT INTO donators ( name, cashout_amount, cashout_description,  cashout_date, admin_id) 
        VALUES 
        ( :name, :cashout_amount, :cashout_description, :cashout_date, :admin_id)';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data 
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->cashout_amount = htmlspecialchars(strip_tags($this->cashout_amount));
        $this->cashout_description = htmlspecialchars(strip_tags($this->cashout_description));
        $this->cashout_date = htmlspecialchars(strip_tags($this->cashout_date));
        $this->admin_id = htmlspecialchars(strip_tags($this->admin_id));


        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':cashout_amount', $this->cashout_amount);
        $stmt->bindParam(':cashout_description', $this->cashout_description);
        $stmt->bindParam(':cashout_date', $this->cashout_date);
        $stmt->bindParam(':admin_id', $this->admin_id);

        // execute the query 
        if($stmt->execute()){
            return true;
        }
        
        //print error if something goes wrong
        printf("Error %s. \n", $stmt->error);
        return false;
    }
    public function getDeliveryList() {
        //create query 
        $query = 'SELECT * from orders o
        JOIN members m ON m.member_id = o.member_id
        JOIN riders r ON r.rider_id = o.rider_id
                  
        ';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data 

        // $this->status = "accepted";       

        // $stmt->bindParam(1, $this->status);
    
        //excute query
        $stmt->execute();

        return $stmt;
    }
}