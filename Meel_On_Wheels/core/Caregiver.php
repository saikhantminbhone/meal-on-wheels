<?php 

class Caregiver 
{
    private $conn;
    private $table = 'caregivers';

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
               WHERE caregiver_id = ? LIMIT 1';

        
        //prepare statement
        $stmt = $this->conn->prepare($query);

        // binding param
        $stmt->bindParam(1, $this->id);
        // execute the query
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->caregiver_id = $row['caregiver_id'];
        $this->caregiver_firstname = $row['caregiver_firstname'];
        $this->caregiver_lastname = $row['caregiver_lastname'];
        $this->caregiver_birthday = $row['caregiver_birthday'];
        $this->caregiver_email = $row['caregiver_email'];
        $this->caregiver_password = $row['caregiver_password'];
        $this->caregiver_phonenumber = $row['caregiver_phonenumber'];
        $this->caregiver_address = $row['caregiver_address'];
        $this->caregiver_city = $row['caregiver_city'];
        $this->caregiver_nrc = $row['caregiver_nrc'];
        $this->caregiver_reason = $row['caregiver_reason'];
        $this->caregiver_available_date = $row['caregiver_available_date'];
        $this->caregiver_created_at = $row['caregiver_created_at'];

    }

    public function create(){
        //create query 
        $query = 'INSERT INTO ' .$this->table . ' (caregiver_firstname, caregiver_lastname, caregiver_birthday, caregiver_email, 
        caregiver_password, caregiver_phonenumber, caregiver_address, caregiver_city, caregiver_nrc, 
        caregiver_reason, caregiver_available_date) 
        VALUES 
        (:caregiver_firstname, :caregiver_lastname, :caregiver_birthday, :caregiver_email, 
        :caregiver_password, :caregiver_phonenumber, :caregiver_address,:caregiver_city, :caregiver_nrc, :caregiver_reason, :caregiver_available_date)';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data 
        $this->caregiver_firstname = htmlspecialchars(strip_tags($this->caregiver_firstname));
        $this->caregiver_lastname = htmlspecialchars(strip_tags($this->caregiver_lastname));
        $this->caregiver_birthday = htmlspecialchars(strip_tags($this->caregiver_birthday));
        $this->caregiver_email = htmlspecialchars(strip_tags($this->caregiver_email));
        $this->caregiver_password = htmlspecialchars(strip_tags($this->caregiver_password));
        $this->caregiver_phonenumber = htmlspecialchars(strip_tags($this->caregiver_phonenumber));
        $this->caregiver_address = htmlspecialchars(strip_tags($this->caregiver_address));
        $this->caregiver_city = htmlspecialchars(strip_tags($this->caregiver_city));
        $this->caregiver_nrc = htmlspecialchars(strip_tags($this->caregiver_nrc));
        $this->caregiver_reason = htmlspecialchars(strip_tags($this->caregiver_reason));
        $this->caregiver_available_date = htmlspecialchars(strip_tags($this->caregiver_available_date));



        $stmt->bindParam(':caregiver_firstname', $this->caregiver_firstname);
        $stmt->bindParam(':caregiver_lastname', $this->caregiver_lastname);
        $stmt->bindParam(':caregiver_birthday', $this->caregiver_birthday);
        $stmt->bindParam(':caregiver_email', $this->caregiver_email);
        $stmt->bindParam(':caregiver_password', $this->caregiver_password);
        $stmt->bindParam(':caregiver_phonenumber', $this->caregiver_phonenumber);
        $stmt->bindParam(':caregiver_address', $this->caregiver_address);
        $stmt->bindParam(':caregiver_city', $this->caregiver_city);
        $stmt->bindParam(':caregiver_nrc', $this->caregiver_nrc);
        $stmt->bindParam(':caregiver_reason', $this->caregiver_reason);
        $stmt->bindParam(':caregiver_available_date', $this->caregiver_available_date);


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
        SET caregiver_firstname= :caregiver_firstname, caregiver_lastname = :caregiver_lastname, caregiver_birthday = :caregiver_birthday, 
        caregiver_email = :caregiver_email, caregiver_password = :caregiver_password, 
        caregiver_phonenumber = :caregiver_phonenumber, caregiver_address = :caregiver_address,
        caregiver_city = :caregiver_city,caregiver_nrc = :caregiver_nrc,caregiver_reason = :caregiver_reason,caregiver_available_date = :caregiver_available_date
        WHERE caregiver_id = :id';

        // var_dump($query);
        // die();

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data 
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->caregiver_firstname = htmlspecialchars(strip_tags($this->caregiver_firstname));
        $this->caregiver_lastname = htmlspecialchars(strip_tags($this->caregiver_lastname));
        $this->caregiver_birthday = htmlspecialchars(strip_tags($this->caregiver_birthday));
        $this->caregiver_email = htmlspecialchars(strip_tags($this->caregiver_email));
        $this->caregiver_password = htmlspecialchars(strip_tags($this->caregiver_password));
        $this->caregiver_phonenumber = htmlspecialchars(strip_tags($this->caregiver_phonenumber));
        $this->caregiver_address = htmlspecialchars(strip_tags($this->caregiver_address));
        $this->caregiver_city = htmlspecialchars(strip_tags($this->caregiver_city));
        $this->caregiver_nrc = htmlspecialchars(strip_tags($this->caregiver_nrc));
        $this->caregiver_reason = htmlspecialchars(strip_tags($this->caregiver_reason));
        $this->caregiver_available_date = htmlspecialchars(strip_tags($this->caregiver_available_date));

        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':caregiver_firstname', $this->caregiver_firstname);
        $stmt->bindParam(':caregiver_lastname', $this->caregiver_lastname);
        $stmt->bindParam(':caregiver_birthday', $this->caregiver_birthday);
        $stmt->bindParam(':caregiver_email', $this->caregiver_email);
        $stmt->bindParam(':caregiver_password', $this->caregiver_password);
        $stmt->bindParam(':caregiver_phonenumber', $this->caregiver_phonenumber);
        $stmt->bindParam(':caregiver_address', $this->caregiver_address);
        $stmt->bindParam(':caregiver_city', $this->caregiver_city);
        $stmt->bindParam(':caregiver_nrc', $this->caregiver_nrc);
        $stmt->bindParam(':caregiver_reason', $this->caregiver_reason);
        $stmt->bindParam(':caregiver_available_date', $this->caregiver_available_date);
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
        $query = 'DELETE FROM ' .$this->table . ' WHERE caregiver_id = :id';
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


    public function getMember() {
        $query = 'SELECT 
                * FROM members
               WHERE member_request_caregiver = ? AND member_approve = ?';



        //prepare statement
        $stmt = $this->conn->prepare($query);

        $this->request_caregiver = "yes";
        $this->approved = "accepted";
        // // binding param
        $stmt->bindParam(1, $this->request_caregiver);
        $stmt->bindParam(2, $this->approved);
        // execute the query
        $stmt->execute();
        return $stmt;
    }

    public function acceptMember() {
        $query = 'UPDATE members SET caregiver_id = :caregiver_id, member_approve = :member_approve
        WHERE member_id = :id';


        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data
        $this->caregiver_id = htmlspecialchars(strip_tags($this->caregiver_id));
        $this->id = htmlspecialchars(strip_tags($this->id));

        $this->member_approve = "accepted";

        $stmt->bindParam(':caregiver_id', $this->caregiver_id);
        $stmt->bindParam(':member_approve', $this->member_approve);
        $stmt->bindParam(':id', $this->id);

        // execute the query 
        if($stmt->execute()){
            return true;
        }

        //print error if something goes wrong
        printf("Error %s. \n", $stmt->error);
        return false;
    }

    public function getAcceptedMember(){
        $query = 'SELECT 
                m.member_id, 
                m.member_firstname, 
                m.member_lastname,
                m.member_phonenumber,
                m.member_email,
                m.member_address FROM members m
                LEFT JOIN caregivers c ON m.caregiver_id = c.caregiver_id
                WHERE c.caregiver_id = ?';

        
        //prepare statement
        $stmt = $this->conn->prepare($query);

        $this->id = htmlspecialchars(strip_tags($this->id));

        $stmt->bindParam(1, $this->id);

        // execute the query
        $stmt->execute();
        return $stmt;
    }

    public function getCaregiverMember() {
        $query = 'SELECT *
        FROM members m
        LEFT JOIN caregivers c ON m.caregiver_id = c.caregiver_id
        WHERE m.member_approve = ? AND m.member_request_caregiver = ? AND m.caregiver_id != 1';


        //prepare statement
        $stmt = $this->conn->prepare($query);

        $this->approve = "accepted";
        $this->request_caregiver = "yes";

        $stmt->bindParam(1, $this->approve);
        $stmt->bindParam(2, $this->request_caregiver);

        // execute the query
        $stmt->execute();
        return $stmt;


    }
}