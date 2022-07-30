<?php 

class Rider 
{
    private $conn;
    private $table = 'riders';

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
               WHERE rider_id = ? LIMIT 1';

        
        //prepare statement
        $stmt = $this->conn->prepare($query);

        // binding param
        $stmt->bindParam(1, $this->id);
        // execute the query
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->rider_id = $row['rider_id'];
        $this->rider_firstname = $row['rider_firstname'];
        $this->rider_lastname = $row['rider_lastname'];
        $this->rider_birthday = $row['rider_birthday'];
        $this->rider_email = $row['rider_email'];
        $this->rider_password = $row['rider_password'];
        $this->rider_phonenumber = $row['rider_phonenumber'];
        $this->rider_address = $row['rider_address'];
        $this->rider_city = $row['rider_city'];
        $this->rider_nrc = $row['rider_nrc'];
        $this->rider_available_date = $row['rider_available_date'];
        $this->rider_reason = $row['rider_reason'];
        $this->rider_created_at = $row['rider_created_at'];

    }

    public function create(){
        //create query 
        $query = 'INSERT INTO ' .$this->table . ' (rider_firstname, rider_lastname, rider_birthday, rider_email, 
        rider_password, rider_phonenumber, rider_address, rider_city, 
        rider_nrc, rider_available_date, rider_reason) 
        VALUES 
        (:rider_firstname, :rider_lastname, :rider_birthday, :rider_email, 
        :rider_password, :rider_phonenumber, :rider_address,
        :rider_city, :rider_nrc, :rider_available_date, :rider_reason)';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data 
        $this->rider_firstname = htmlspecialchars(strip_tags($this->rider_firstname));
        $this->rider_lastname = htmlspecialchars(strip_tags($this->rider_lastname));
        $this->rider_birthday = htmlspecialchars(strip_tags($this->rider_birthday));
        $this->rider_email = htmlspecialchars(strip_tags($this->rider_email));
        $this->rider_password = htmlspecialchars(strip_tags($this->rider_password));
        $this->rider_phonenumber = htmlspecialchars(strip_tags($this->rider_phonenumber));
        $this->rider_address = htmlspecialchars(strip_tags($this->rider_address));
        $this->rider_city = htmlspecialchars(strip_tags($this->rider_city));
        $this->rider_nrc = htmlspecialchars(strip_tags($this->rider_nrc));
        $this->rider_available_date = htmlspecialchars(strip_tags($this->rider_available_date));
        $this->rider_reason = htmlspecialchars(strip_tags($this->rider_reason));



        $stmt->bindParam(':rider_firstname', $this->rider_firstname);
        $stmt->bindParam(':rider_lastname', $this->rider_lastname);
        $stmt->bindParam(':rider_birthday', $this->rider_birthday);
        $stmt->bindParam(':rider_email', $this->rider_email);
        $stmt->bindParam(':rider_password', $this->rider_password);
        $stmt->bindParam(':rider_phonenumber', $this->rider_phonenumber);
        $stmt->bindParam(':rider_address', $this->rider_address);
        $stmt->bindParam(':rider_city', $this->rider_city);
        $stmt->bindParam(':rider_nrc', $this->rider_nrc);
        $stmt->bindParam(':rider_available_date', $this->rider_available_date);
        $stmt->bindParam(':rider_reason', $this->rider_reason);


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
        SET rider_firstname= :rider_firstname, rider_lastname = :rider_lastname, 
        rider_birthday = :rider_birthday, rider_email = :rider_email, 
        rider_password = :rider_password, rider_phonenumber = :rider_phonenumber, 
        rider_address = :rider_address, rider_city = :rider_city, rider_nrc = :rider_nrc, 
        rider_available_date = :rider_available_date, rider_reason = :rider_reason
        WHERE rider_id = :id';

        // var_dump($query);
        // die();

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data 
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->rider_firstname = htmlspecialchars(strip_tags($this->rider_firstname));
        $this->rider_lastname = htmlspecialchars(strip_tags($this->rider_lastname));
        $this->rider_birthday = htmlspecialchars(strip_tags($this->rider_birthday));
        $this->rider_email = htmlspecialchars(strip_tags($this->rider_email));
        $this->rider_password = htmlspecialchars(strip_tags($this->rider_password));
        $this->rider_phonenumber = htmlspecialchars(strip_tags($this->rider_phonenumber));
        $this->rider_address = htmlspecialchars(strip_tags($this->rider_address));
        $this->rider_city = htmlspecialchars(strip_tags($this->rider_city));
        $this->rider_nrc = htmlspecialchars(strip_tags($this->rider_nrc));
        $this->rider_available_date = htmlspecialchars(strip_tags($this->rider_available_date));
        $this->rider_reason = htmlspecialchars(strip_tags($this->rider_reason));

        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':rider_firstname', $this->rider_firstname);
        $stmt->bindParam(':rider_lastname', $this->rider_lastname);
        $stmt->bindParam(':rider_birthday', $this->rider_birthday);
        $stmt->bindParam(':rider_email', $this->rider_email);
        $stmt->bindParam(':rider_password', $this->rider_password);
        $stmt->bindParam(':rider_phonenumber', $this->rider_phonenumber);
        $stmt->bindParam(':rider_address', $this->rider_address);
        $stmt->bindParam(':rider_city', $this->rider_city);
        $stmt->bindParam(':rider_nrc', $this->rider_nrc);
        $stmt->bindParam(':rider_available_date', $this->rider_available_date);
        $stmt->bindParam(':rider_reason', $this->rider_reason);
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
        $query = 'DELETE FROM ' .$this->table . ' WHERE rider_id = :id';
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

    public function acceptOrder() {
         //create query 
         $query = 'UPDATE orders SET status = :status, rider_id = :rider_id
         WHERE order_id = :id';
 
         // var_dump($query);
         // die();
 
         //prepare statement
         $stmt = $this->conn->prepare($query);
 
         //clean data 
         $this->id = htmlspecialchars(strip_tags($this->id));

         $this->status = htmlspecialchars(strip_tags($this->status));
         $this->rider_id = htmlspecialchars(strip_tags($this->rider_id));
 
 
         $stmt->bindParam(':status', $this->status);
         $stmt->bindParam(':rider_id', $this->rider_id);
         $stmt->bindParam(':id', $this->id);
  
 
 
         // execute the query 
         if($stmt->execute()){
             return true;
         }
         
         //print error if something goes wrong
         printf("Error %s. \n", $stmt->error);
         return false;
    }

    public function getDelieveredOrder() {
        //create query 
        $query = 'SELECT 
        *
        FROM orders WHERE status = ? AND rider_id = ? ';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data 
         $this->status = "delivered";
         $this->rider_id = htmlspecialchars(strip_tags($this->rider_id));
 
 
         $stmt->bindParam('1', $this->status);
         $stmt->bindParam('2', $this->rider_id);
 
  
    
        //excute query
        $stmt->execute();

        return $stmt;
    }

    public function orderDetails(){
        //create query 
        $query = 'SELECT ms.member_firstname, ms.member_lastname, ms.member_address,ms.member_phonenumber, m.name, o.meal_type, p.address, p.phonenumber
        FROM orders o
        LEFT JOIN order_meal om ON o.order_id = om.order_id 
        LEFT JOIN meals m ON m.meal_id = om.meal_id
        LEFT JOIN partner_meal pm ON pm.meal_id = m.meal_id
        LEFT JOIN partners p ON p.partner_id = pm.partner_id
        LEFT JOIN members ms ON ms.member_id = o.member_id
        WHERE o.order_id = ?
        ';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data 
        $this->id = htmlspecialchars(strip_tags($this->id));
 
 
         $stmt->bindParam('1', $this->id);

 
  
    
        //excute query
        $stmt->execute();

        return $stmt;
    }

    
    public function getPartnerAcceptedOrder(){
         //create query 
         $query = 'SELECT 
         *
         FROM orders WHERE status = ?';

     //prepare statement
     $stmt = $this->conn->prepare($query);
     $this->status = 'partner_accepted';
     $stmt->bindParam(1, $this->status);
     //excute query
     $stmt->execute();

     return $stmt;
    }

    public function deliverOrder() {
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

   public function getAllStatusOrder()
   {
        //create query
        $query = 'SELECT
        *
        FROM orders';
 
        //prepare statement
        $stmt = $this->conn->prepare($query);
 
        //excute query
        $stmt->execute();
 
        return $stmt;
   }
}