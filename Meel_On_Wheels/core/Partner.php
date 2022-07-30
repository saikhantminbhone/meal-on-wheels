<?php 

class Partner 
{
    private $conn;
    private $table = 'partners';

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
        $query = 'SELECT 
            *
            FROM '.$this->table;

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //excute query
        $stmt->execute();

        return $stmt;
    }

    public function read_single(){
        $query = 'SELECT 
                * FROM ' .$this->table .'
               WHERE partner_id = ? LIMIT 1';

        
        //prepare statement
        $stmt = $this->conn->prepare($query);

        // binding param
        $stmt->bindParam(1, $this->id);
        // execute the query
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->partner_id = $row['partner_id'];
        $this->firstname = $row['firstname'];
        $this->lastname = $row['lastname'];
        $this->email = $row['email'];
        $this->password = $row['password'];
        $this->birthday = $row['birthday'];
        $this->phonenumber = $row['phonenumber'];
        $this->address = $row['address'];
        $this->partner_latitude = $row['partner_latitude'];
        $this->partner_longitude = $row['partner_longitude'];
        $this->city = $row['city'];
        $this->nrc = $row['nrc'];
        $this->reason = $row['reason'];
        $this->created_at = $row['created_at'];

    }

    public function create(){
        //create query 
        $query = 'INSERT INTO ' .$this->table . ' (firstname, lastname, email, password, birthday, phonenumber, address, partner_latitude, partner_longitude, city, nrc, reason) 
        VALUES 
        (:firstname, :lastname, :email, :password, :birthday, :phonenumber, :address, :partner_latitude, :partner_longitude, :city, :nrc, :reason)';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data 
        $this->firstname = htmlspecialchars(strip_tags($this->firstname));
        $this->lastname = htmlspecialchars(strip_tags($this->lastname));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->password = htmlspecialchars(strip_tags($this->password));
        $this->birthday = htmlspecialchars(strip_tags($this->birthday));
        $this->phonenumber = htmlspecialchars(strip_tags($this->phonenumber));
        $this->address = htmlspecialchars(strip_tags($this->address));
        $this->partner_latitude = htmlspecialchars(strip_tags($this->partner_latitude));
        $this->partner_longitude = htmlspecialchars(strip_tags($this->partner_longitude));
        $this->city = htmlspecialchars(strip_tags($this->city));
        $this->nrc = htmlspecialchars(strip_tags($this->nrc));
        $this->reason = htmlspecialchars(strip_tags($this->reason));




        $stmt->bindParam(':firstname', $this->firstname);
        $stmt->bindParam(':lastname', $this->lastname);        
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':password', $this->password);
        $stmt->bindParam(':birthday', $this->birthday);
        $stmt->bindParam(':phonenumber', $this->phonenumber);
        $stmt->bindParam(':address', $this->address);
        $stmt->bindParam(':partner_latitude', $this->partner_latitude);
        $stmt->bindParam(':partner_longitude', $this->partner_longitude);
        $stmt->bindParam(':city', $this->city);
        $stmt->bindParam(':nrc', $this->nrc);
        $stmt->bindParam(':reason', $this->reason);



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
        SET firstname= :firstname, lastname = :lastname,email = :email, password = :password, birthday = :birthday,  phonenumber = :phonenumber, address = :address, partner_latitude = :partner_latitude, partner_longitude = :partner_longitude,city = :city, nrc = :nrc, reason = :reason
        WHERE partner_id = :id';

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
        $this->address = htmlspecialchars(strip_tags($this->address));
        $this->partner_latitude = htmlspecialchars(strip_tags($this->partner_latitude));
        $this->partner_longitude = htmlspecialchars(strip_tags($this->partner_longitude));
        $this->city = htmlspecialchars(strip_tags($this->city));
        $this->nrc = htmlspecialchars(strip_tags($this->nrc));
        $this->reason = htmlspecialchars(strip_tags($this->reason));


        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':firstname', $this->firstname);
        $stmt->bindParam(':lastname', $this->lastname);
        $stmt->bindParam(':birthday', $this->birthday);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':password', $this->password);
        $stmt->bindParam(':phonenumber', $this->phonenumber);
        $stmt->bindParam(':address', $this->address);
        $stmt->bindParam(':partner_latitude', $this->partner_latitude);
        $stmt->bindParam(':partner_longitude', $this->partner_longitude);
        $stmt->bindParam(':city', $this->city);
        $stmt->bindParam(':nrc', $this->nrc);
        $stmt->bindParam(':reason', $this->reason);

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
        $query = 'DELETE FROM ' .$this->table . ' WHERE partner_id = :id';
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


    public function getMeal(){
        $query = 'SELECT * FROM meals m 
        WHERE m.status != ?';

        
        //prepare statement
        $stmt = $this->conn->prepare($query);


        $this->status = "approved";
        // binding param
        $stmt->bindParam(1, $this->status);


        // execute the query
        $stmt->execute();
        return $stmt;
    }

    public function submitMeal() {
        //create query 
        $query = 'UPDATE meals m SET status = :status
        WHERE meal_id = :id';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data 
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->status = htmlspecialchars(strip_tags($this->status));
  

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

    public function acceptOrder() {
        //create query 
        $query = 'UPDATE orders SET status = :status
        WHERE order_id = :id';

        // var_dump($query);
        // die();

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data 
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->status = htmlspecialchars(strip_tags($this->status));

        $stmt->bindParam(':status', $this->status);
        $stmt->bindParam(':id', $this->id);
 


        // execute the query 
        if($stmt->execute()){
            return true;
        }
        
        //print error if something goes wrong
        printf("Error %s. \n", $stmt->error);
        return false;
   }

}