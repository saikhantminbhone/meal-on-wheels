<?php 


class Login {
    private $conn;
    private $email;
    private $password;
    public $logindata= array();

    public function __construct($db, $email, $password)
    {
        $this->conn = $db;
        $this->email = $email;
        $this->password = $password;
        
    }
    
    public function validation() {

        
        if ($this->member()) {
        
            // var_dump($this->member());
            // die();
            // $this->logindata = $this->member();

             $this->logindata  = array(
                'member_id' => $this->member()['member_id'],
                'caregiver_id' => $this->member()['caregiver_id'],
                'firstname' => $this->member()['member_firstname'],
                'lastname' => $this->member()['member_lastname'],
                'birthday' => $this->member()['member_birthday'],
                'email' => $this->member()['member_email'],
                'password' => $this->member()['member_password'],
                'phonenumber' => $this->member()['member_phonenumber'],
                'address' => $this->member()['member_address'],
                'city' => $this->member()['member_city'],
                'nrc' => $this->member()['member_nrc'],
                'request_caregiver' => $this->member()['member_request_caregiver'],
                'document' => $this->member()['member_document'],
                'approve' => $this->member()['member_approve'],
                'created_at' => $this->member()['member_created_at']
            );
            return true;

        } elseif ($this->caregiver()) {

            $this->logindata = array(
                'caregiver_id' => $this->caregiver()['caregiver_id'],
                'firstname' => $this->caregiver()['caregiver_firstname'],
                'lastname' => $this->caregiver()['caregiver_lastname'],
                'birthday' => $this->caregiver()['caregiver_birthday'],
                'email' => $this->caregiver()['caregiver_email'],
                'password' => $this->caregiver()['caregiver_password'],
                'phonenumber' => $this->caregiver()['caregiver_phonenumber'],
                'address' => $this->caregiver()['caregiver_address'],
                'city' => $this->caregiver()['caregiver_city'],
                'nrc' => $this->caregiver()['caregiver_nrc'],
                'reason' => $this->caregiver()['caregiver_reason'],
                'available_date' => $this->caregiver()['caregiver_available_date'],
                'created_at' => $this->caregiver()['caregiver_created_at']
            );
            return true;
        } elseif ($this->rider()) {

            $this->logindata = array(
                'rider_id' => $this->rider()['rider_id'],
                'firstname' => $this->rider()['rider_firstname'],
                'lastname' => $this->rider()['rider_lastname'],
                'birthday' => $this->rider()['rider_birthday'],
                'email' => $this->rider()['rider_email'],
                'password' => $this->rider()['rider_password'],
                'phonenumber' => $this->rider()['rider_phonenumber'],
                'address' => $this->rider()['rider_address'],
                'city' => $this->rider()['rider_city'],
                'nrc' => $this->rider()['rider_nrc'],
                'reason' => $this->rider()['rider_reason'],
                'available_date' => $this->rider()['rider_available_date'],
                'created_at' => $this->rider()['rider_created_at']
            );
            return true;
        } elseif ($this->partner()) {
            $this->logindata = array(
                'partner_id' => $this->partner()['partner_id'],
                'firstname' => $this->partner()['firstname'],
                'lastname' => $this->partner()['lastname'],
                'email' => $this->partner()['email'],
                'password' => $this->partner()['password'],
                'birthday' => $this->partner()['birthday'],
                'phonenumber' => $this->partner()['phonenumber'],
                'address' => $this->partner()['address'],
                'partner_latitude' => $this->partner()['partner_latitude'],
                'partner_longitude' => $this->partner()['partner_longitude'],
                'city' => $this->partner()['city'],
                'nrc' => $this->partner()['nrc'],
                'reason' => $this->partner()['reason'],
                'created_at' => $this->partner()['created_at']
            );
            return true;
        }   elseif ($this->admin()) {
            $this->logindata = array(
                'admin_id' => $this->admin()['admin_id'],
                'firstname' => $this->admin()['firstname'],
                'lastname' => $this->admin()['lastname'],
                'email' => $this->admin()['email'],
                'password' => $this->admin()['password'],
                'phonenumber' => $this->admin()['phonenumber'],
                'available_date' => $this->admin()['available_date'],
                'nrc' => $this->admin()['nrc'],
                'created_at' => $this->admin()['created_at']
            );
            return true;
        }  
        else {
            return $this->logindata  = array(
                'status' => "login fail"
            );
        }


        

    }

    public function member() {
        //create query 
        $query = 'SELECT * FROM members WHERE member_email = :email AND member_password = :password AND member_approve = :status';

        //prepare statement
        $stmt = $this->conn->prepare($query);
        $this->status = 'accepted';
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':password', $this->password);
        $stmt->bindParam(':status', $this->status);


                // execute the query
       $stmt->execute();
       $row = $stmt->fetch(PDO::FETCH_ASSOC);
       // var_dump($row);
       // die();
       return $row;


   }

    public function caregiver() {
        //create query 
        $query = 'SELECT * FROM caregivers WHERE caregiver_email = :email AND caregiver_password = :password ';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':password', $this->password);

        // execute the query
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        return $row;


    }
    public function rider() {
        //create query 
        $query = 'SELECT * FROM riders WHERE rider_email = :email AND rider_password = :password ';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':password', $this->password);

        // execute the query
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        return $row;    
    }
    public function partner() {
        //create query 
        $query = 'SELECT * FROM partners WHERE email = :email AND password = :password ';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':password', $this->password);

        // execute the query
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        return $row;    
   }
   public function admin() {
    //create query 
    $query = 'SELECT * FROM admin WHERE email = :email AND password = :password ';

    //prepare statement
    $stmt = $this->conn->prepare($query);

    $stmt->bindParam(':email', $this->email);
    $stmt->bindParam(':password', $this->password);

    // execute the query
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    return $row;    
}
}