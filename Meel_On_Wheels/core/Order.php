<?php 

class Order 
{
    private $conn;
    private $table = 'orders';

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
            FROM '.$this->table . ' WHERE status = ?';

        //prepare statement
        $stmt = $this->conn->prepare($query);
        $this->status = 'ordered';
        $stmt->bindParam(1, $this->status);
        //excute query
        $stmt->execute();

        return $stmt;
    }

    public function read_single(){
        $query = 'SELECT 
                * FROM ' .$this->table .'
               WHERE order_id = ? LIMIT 1';

        
        //prepare statement
        $stmt = $this->conn->prepare($query);

        // binding param
        $stmt->bindParam(1, $this->id);
        // execute the query
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->order_id = $row['order_id'];
        $this->qty = $row['qty'];
        $this->address = $row['address'];
        $this->meal_type = $row['meal_type'];
        $this->order_latitude = $row['order_latitude'];
        $this->order_longitude = $row['order_longitude'];
        $this->status = $row['status'];
        $this->member_id = $row['member_id'];
        $this->created_at = $row['created_at'];

    }

    public function create(){
        //create query 
        $query = 'INSERT INTO ' .$this->table . ' (qty, address, order_latitude, order_longitude, meal_type, status, member_id) 
        VALUES 
        (:qty, :address, :order_latitude , :order_longitude, :meal_type, :status, :member_id)';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data 
        $this->qty = htmlspecialchars(strip_tags($this->qty));
        $this->address = htmlspecialchars(strip_tags($this->address));
        $this->meal_type = htmlspecialchars(strip_tags($this->meal_type));
        $this->order_latitude = htmlspecialchars(strip_tags($this->order_latitude));
        $this->order_longitude = htmlspecialchars(strip_tags($this->order_longitude));
        $this->status = htmlspecialchars(strip_tags($this->status));
        $this->member_id = htmlspecialchars(strip_tags($this->member_id));

        $stmt->bindParam(':qty', $this->qty);
        $stmt->bindParam(':address', $this->address);
        $stmt->bindParam(':meal_type', $this->meal_type);
        $stmt->bindParam(':order_latitude', $this->order_latitude);
        $stmt->bindParam(':order_longitude', $this->order_longitude);
        $stmt->bindParam(':status', $this->status);
        $stmt->bindParam(':member_id', $this->member_id);
  


        // execute the query 
        if($stmt->execute()){
            $this->last_id =  $this->conn->lastInsertId();               

            $query = 'INSERT INTO order_meal (order_id, meal_id) 
            VALUES 
            (:order_id, :meal_id)';

            //prepare statement
            $stmt = $this->conn->prepare($query);

            //clean data 
            $this->meal_id = htmlspecialchars(strip_tags($this->meal_id));


            $stmt->bindParam(':order_id', $this->last_id);
            $stmt->bindParam(':meal_id', $this->meal_id);          

            // execute the query 
            if($stmt->execute()){
                return true;
            }
            

            //print error if something goes wrong
            printf("Error %s. \n", $stmt->error);
            return false;
        }
        
        //print error if something goes wrong
        printf("Error %s. \n", $stmt->error);
        return false;
        
    }


     // update post function
     public function update(){
        //create query 
        $query = 'UPDATE ' .$this->table. ' 
        SET qty= :qty, address = :address, order_latitude = :order_latitude, order_longitude = :order_longitude, meal_type = :meal_type, status = :status, member_id = :member_id
        WHERE order_id = :id';

        // var_dump($query);
        // die();

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data 
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->qty = htmlspecialchars(strip_tags($this->qty));
        $this->address = htmlspecialchars(strip_tags($this->address));
        $this->meal_type = htmlspecialchars(strip_tags($this->meal_type));
        $this->order_latitude = htmlspecialchars(strip_tags($this->order_latitude));
        $this->order_longitude = htmlspecialchars(strip_tags($this->order_longitude));
        $this->status = htmlspecialchars(strip_tags($this->status));
        $this->member_id = htmlspecialchars(strip_tags($this->member_id));


        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':qty', $this->qty);
        $stmt->bindParam(':address', $this->address);
        $stmt->bindParam(':meal_type', $this->meal_type);
        $stmt->bindParam(':order_latitude', $this->order_latitude);
        $stmt->bindParam(':order_longitude', $this->order_longitude);
        $stmt->bindParam(':status', $this->status);
        $stmt->bindParam(':member_id', $this->member_id);


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
        $query = 'DELETE FROM ' .$this->table . ' WHERE order_id = :id';
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

    public function deliverList() {
        //create query 
        $query = 'SELECT 
            *
            FROM '.$this->table. ' WHERE status = ?';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        // clean the data 
        $this->status = htmlspecialchars(strip_tags($this->status));
        //binding the id parameter
        $stmt->bindParam(1, $this->status);


        //excute query
        $stmt->execute();

        return $stmt;
    }

    public function getOrderStatus() {
        $today = date("l");
        
        switch ($today) {
            case "Monday" :
                $this->getday = "Weekday";
                break;
            case "Tuesday" :
                $this->getday = "Weekday";
                break;
            case "Wednesday" :
                $this->getday = "Weekday";
                break;
            case "Thursday" :
                $this->getday = "Weekday";
                break;
            case "Friday" :
                $this->getday = "Weekday";
                break;
            case "Saturday" :
                $this->getday = "Weekenday";
                break;
            case "Sunday" :
                
                $this->getday = "Weekenday";
                break;
                    
        }

    
        $query = 'SELECT * from meals m
        JOIN order_meal om ON om.meal_id = m.meal_id
        JOIN orders o ON o.order_id = om.order_id
        JOIN partner_meal pm ON pm.meal_id = m.meal_id
        JOIN partners p ON p.partner_id = pm.partner_id
        WHERE date = ? AND m.meal_id = ?';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        $this->meal_id = htmlspecialchars(strip_tags($this->meal_id));

        $stmt->bindParam(1, $this->getday);
        $stmt->bindParam(2, $this->meal_id);

        //excute query
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $order_latitude = $row['order_latitude'];
        $order_longitude = $row['order_longitude'];
        $partner_latitude = $row['partner_latitude'];
        $partner_longitude = $row['partner_longitude'];

        // var_dump($order_latitude, $order_longitude, $partner_latitude, $partner_longitude);
        // die();

        function distance($lat1, $lon1, $lat2, $lon2) {

            

            $theta = $lon1 - $lon2;
            $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
            $dist = acos($dist);
            $dist = rad2deg($dist);
            $miles = $dist * 60 * 1.1515;
        
            return round($miles * 1.609344);
        
        }

        $this->distance = distance($order_latitude, $order_longitude, $partner_latitude, $partner_longitude);


        

    }
}