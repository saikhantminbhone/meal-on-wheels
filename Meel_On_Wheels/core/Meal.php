<?php 

class Meal 
{
    private $conn;
    private $table = 'meals';

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

    public $getdate;

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
               WHERE meal_id = ? LIMIT 1';

        
        //prepare statement
        $stmt = $this->conn->prepare($query);

        // binding param
        $stmt->bindParam(1, $this->id);
        // execute the query
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->meal_id = $row['meal_id'];
        $this->name = $row['name'];
        $this->ingredients = $row['ingredients'];
        $this->description = $row['description'];
        $this->meal_type = $row['meal_type'];
        $this->meal_image = $row['meal_image'];
        $this->date = $row['date'];
        $this->status = $row['status'];
        $this->created_at = $row['created_at'];

    }

    public function create(){
        //create query 
        $query = 'INSERT INTO ' .$this->table . ' (name, ingredients, description, meal_type, meal_image , date, status) 
        VALUES 
        (:name, :ingredients, :description, :meal_type, :meal_image, :date, :status)';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        

        //clean data 
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->ingredients = htmlspecialchars(strip_tags($this->ingredients));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->meal_type = htmlspecialchars(strip_tags($this->meal_type));
        $this->meal_image = ($this->meal_image);
        $this->date = htmlspecialchars(strip_tags($this->date));
        $this->status = htmlspecialchars(strip_tags($this->status));


        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':ingredients', $this->ingredients);
        $stmt->bindParam(':description', $this->description);
        $stmt->bindParam(':meal_type', $this->meal_type);
        $stmt->bindParam(':meal_image', $this->meal_image);
        $stmt->bindParam(':date', $this->date);
        $stmt->bindParam(':status', $this->status);

        // $last_id = mysqli_insert_id($this->conn);
        

        // execute the query 
        if($stmt->execute()){
            $this->last_id =  $this->conn->lastInsertId();               

            $query = 'INSERT INTO partner_meal (partner_id, meal_id) 
            VALUES 
            (:partner_id, :meal_id)';

            //prepare statement
            $stmt = $this->conn->prepare($query);

            //clean data 
            $this->partner_id = htmlspecialchars(strip_tags($this->partner_id));


            $stmt->bindParam(':partner_id', $this->partner_id);
            $stmt->bindParam(':meal_id', $this->last_id);          

            // execute the query 
            if($stmt->execute()){
                return true;
            }
            

            //print error if something goes wrong
            printf("Error %s. \n", $stmt->error);
            return false;
        }
    }


     // update post function
     public function update(){
        //create query 
        $query = 'UPDATE ' .$this->table. ' 
        SET name= :name, ingredients = :ingredients, description = :description, meal_type = :meal_type, meal_image = :meal_image, date = :date, status = :status
        WHERE meal_id = :id';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        //clean data 
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->ingredients = htmlspecialchars(strip_tags($this->ingredients));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->meal_type = htmlspecialchars(strip_tags($this->meal_type));
        $this->meal_image = htmlspecialchars(strip_tags($this->meal_image));
        $this->date = htmlspecialchars(strip_tags($this->date));
        $this->status = htmlspecialchars(strip_tags($this->status));
  

        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':ingredients', $this->ingredients);
        $stmt->bindParam(':description', $this->description);
        $stmt->bindParam(':meal_type', $this->meal_type);
        $stmt->bindParam(':meal_image', $this->meal_image);
        $stmt->bindParam(':date', $this->date);
        $stmt->bindParam(':status', $this->status);


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
        $query = 'DELETE FROM partner_meal WHERE meal_id = :id';
        // prepare statement 
        $stmt = $this->conn->prepare($query);

        // clean the data 
        $this->id = htmlspecialchars(strip_tags($this->id));
        //binding the id parameter
        $stmt->bindParam(':id', $this->id);

        // execute the query 
        if($stmt->execute()){
            // create query 
            $query = 'DELETE FROM meals WHERE meal_id = :id';
            // prepare statement 
            $stmt = $this->conn->prepare($query);

             // clean the data 
        $this->id = htmlspecialchars(strip_tags($this->id));
        //binding the id parameter
        $stmt->bindParam(':id', $this->id);
            $stmt->execute();
            return true;
        }

        //print error if something goes wrong
        printf("Error %s. \n", $stmt->error);
        return false;
    }

    public function getMealWithDate() {

        $today = date("l");
        
            switch ($today) {
                case "Monday" :
                    $this->getday = "weekday";
                    break;
                case "Tuesday" :
                    $this->getday = "weekday";
                    break;
                case "Wednesday" :
                    $this->getday = "weekday";
                    break;
                case "Thursday" :
                    $this->getday = "weekday";
                    break;
                case "Friday" :
                    $this->getday = "weekday";
                    break;
                case "Saturday" :
                    $this->getday = "weekenday";
                    break;
                case "Sunday" :
                    
                    $this->getday = "weekend";
                    break;
                        
            }

        
        $query = 'SELECT m.meal_id from meals m
        WHERE date = ? AND status = ? AND meal_type = ? order by RAND() limit 1';

        //prepare statement
        $stmt = $this->conn->prepare($query);

        $this->status = "approved";
        $this->meal_type = htmlspecialchars(strip_tags($this->meal_type));

        $stmt->bindParam(1, $this->getday);
        $stmt->bindParam(2, $this->status);
        $stmt->bindParam(3, $this->meal_type);

        //excute query
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);


        $this->meal_id = $row['meal_id'];


    }


}