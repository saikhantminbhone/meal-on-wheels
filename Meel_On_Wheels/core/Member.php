<?php 

class Member 
{
    private $conn;
    private $table = 'members';

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
               WHERE member_id = ? LIMIT 1';

        
        //prepare statement
        $stmt = $this->conn->prepare($query);

        // binding param
        $stmt->bindParam(1, $this->id);
        // execute the query
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->member_id = $row['member_id'];
        $this->caregiver_id = $row['caregiver_id'];
        $this->member_firstname = $row['member_firstname'];
        $this->member_lastname = $row['member_lastname'];
        $this->member_birthday = $row['member_birthday'];
        $this->member_email = $row['member_email'];
        $this->member_password = $row['member_password'];
        $this->member_phonenumber = $row['member_phonenumber'];
        $this->member_reason = $row['member_reason'];
        $this->member_address = $row['member_address'];
        $this->member_city = $row['member_city'];
        $this->member_nrc = $row['member_nrc'];
        $this->member_request_caregiver = $row['member_request_caregiver'];
        $this->member_document = $row['member_document'];
        $this->member_approve = $row['member_approve'];
        $this->member_created_at = $row['member_created_at'];

    }

    public function create(){
        //create query 
        $query = 'INSERT INTO ' .$this->table . ' (caregiver_id,member_firstname, member_lastname, member_birthday, 
        member_email, member_password, member_phonenumber, member_address, 
        member_city, member_nrc, member_request_caregiver, member_document, member_approve,member_reason) 
        VALUES 
        (:caregiver_id,:member_firstname, :member_lastname, :member_birthday, 
        :member_email, :member_password, :member_phonenumber, :member_address,
        :member_city, :member_nrc, :member_request_caregiver, :member_document, :member_approve,:member_reason)';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data 
        $this->caregiver_id =1;
        $this->member_firstname = htmlspecialchars(strip_tags($this->member_firstname));
        $this->member_lastname = htmlspecialchars(strip_tags($this->member_lastname));
        $this->member_birthday = htmlspecialchars(strip_tags($this->member_birthday));
        $this->member_email = htmlspecialchars(strip_tags($this->member_email));
        $this->member_password = htmlspecialchars(strip_tags($this->member_password));
        $this->member_phonenumber = htmlspecialchars(strip_tags($this->member_phonenumber));
        $this->member_address = htmlspecialchars(strip_tags($this->member_address));
        $this->member_city = htmlspecialchars(strip_tags($this->member_city));
        $this->member_nrc = htmlspecialchars(strip_tags($this->member_nrc));
        $this->member_request_caregiver = htmlspecialchars(strip_tags($this->member_request_caregiver));
        $this->member_document = ($this->member_document);
        $this->member_approve = htmlspecialchars(strip_tags($this->member_approve));
        $this->member_reason = htmlspecialchars(strip_tags($this->member_reason));



        $stmt->bindParam(':caregiver_id', $this->caregiver_id);
        $stmt->bindParam(':member_firstname', $this->member_firstname);
        $stmt->bindParam(':member_lastname', $this->member_lastname);
        $stmt->bindParam(':member_birthday', $this->member_birthday);
        $stmt->bindParam(':member_email', $this->member_email);
        $stmt->bindParam(':member_password', $this->member_password);
        $stmt->bindParam(':member_phonenumber', $this->member_phonenumber);
        $stmt->bindParam(':member_address', $this->member_address);
        $stmt->bindParam(':member_city', $this->member_city);
        $stmt->bindParam(':member_nrc', $this->member_nrc);
        $stmt->bindParam(':member_request_caregiver', $this->member_request_caregiver);
        $stmt->bindParam(':member_document', $this->member_document);
        $stmt->bindParam(':member_approve', $this->member_approve);
        $stmt->bindParam(':member_reason', $this->member_reason);


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
        $query = 'UPDATE ' .$this->table. ' SET caregiver_id = :caregiver_id, member_firstname = :member_firstname, 
        member_lastname = :member_lastname, member_birthday = :member_birthday, 
        member_email = :member_email, member_password = :member_password, 
        member_phonenumber = :member_phonenumber, member_address = :member_address, 
        member_city = :member_city, member_nrc = :member_nrc, member_request_caregiver = :member_request_caregiver
        WHERE member_id = :id';

        // var_dump($query);
        // die();

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data 
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->caregiver_id = htmlspecialchars(strip_tags($this->caregiver_id));
        $this->member_firstname = htmlspecialchars(strip_tags($this->member_firstname));
        $this->member_lastname = htmlspecialchars(strip_tags($this->member_lastname));
        $this->member_birthday = htmlspecialchars(strip_tags($this->member_birthday));
        $this->member_email = htmlspecialchars(strip_tags($this->member_email));
        $this->member_password = htmlspecialchars(strip_tags($this->member_password));
        $this->member_phonenumber = htmlspecialchars(strip_tags($this->member_phonenumber));
        $this->member_address = htmlspecialchars(strip_tags($this->member_address));
        $this->member_city = htmlspecialchars(strip_tags($this->member_city));
        $this->member_nrc = htmlspecialchars(strip_tags($this->member_nrc));
        $this->member_request_caregiver = htmlspecialchars(strip_tags($this->member_request_caregiver));
     

        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':caregiver_id', $this->caregiver_id);
        $stmt->bindParam(':member_firstname', $this->member_firstname);
        $stmt->bindParam(':member_lastname', $this->member_lastname);
        $stmt->bindParam(':member_birthday', $this->member_birthday);
        $stmt->bindParam(':member_email', $this->member_email);
        $stmt->bindParam(':member_password', $this->member_password);
        $stmt->bindParam(':member_phonenumber', $this->member_phonenumber);
        $stmt->bindParam(':member_address', $this->member_address);
        $stmt->bindParam(':member_city', $this->member_city);
        $stmt->bindParam(':member_nrc', $this->member_nrc);
        $stmt->bindParam(':member_request_caregiver', $this->member_request_caregiver);
       

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
        $query = 'DELETE FROM ' .$this->table . ' WHERE member_id = :id';
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

}