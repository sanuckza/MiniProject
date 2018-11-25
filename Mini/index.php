<html>
    <head>
        <title>Cafe Firebase</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="app.js"></script>
        
        <style> 
        
        body {
            background-image: url("wood.jpg");
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
        
        table {
            width : 1000px;
            height: 100px;
            border-collapse: collapse;
            text-align:center;
            margin-left:auto; 
            margin-right:auto;
        }

        th {
        padding: 8px;
        color:black;
        font-size:30px;
        text-align:center;
        border: 5px solid black;
        }

        td{
        padding: 8px;
        color:black;
        font-size:25px;
        text-align:center;
        border: 5px solid black;
        }

        p{
            font-size:28px;
        }

        /* img{
            display: block;
            margin-left: auto;
            margin-right: auto;
        } */

        </style>
        
        <body>

        <script src="https://www.gstatic.com/firebasejs/5.5.9/firebase.js"></script>
            <script>
            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyC8TnK_DRJEXw28EDURKlJayDAEgDa6W10",
                authDomain: "cafe-e756f.firebaseapp.com",
                databaseURL: "https://cafe-e756f.firebaseio.com",
                projectId: "cafe-e756f",
                storageBucket: "cafe-e756f.appspot.com",
                messagingSenderId: "219598985969"
            };
            firebase.initializeApp(config);
            </script>
        
        <br><br>
        <center>
        <img src="logo.png" alt="Trulli" width="500" height="333">
        <br><br><br><br>
        <img src="promotion.png" width="700" height="333">
        <br><br><br>
        <img src="promotion1.png" width="200" height="333">
        <img src="promotion2.png" width="200" height="333">
        <img src="promotion3.png" width="200" height="333">
        </center>
        <?php
        header("refresh:10");
        ?>
        <table>
        <tr>
            <th>โต๊ะ</th>
            <th>เมนู</th>
            <th>จำนวน</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Latte</td>
            <td>2</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Chocolate Cake</td>
            <td>2</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Latte</td>
            <td>1</td>
        </tr>
        </table>
           
        
            <script>
            var database = firebase.database().ref().child('Order');
            database.once('value', function(snapshot){
                if(snapshot.exists()){
                    var content = '';
                    var ID= snapshot.val().ID;
                    var Menu= snapshot.val().Menu;
                    var Values= snapshot.val().Values;

                    snapshot.forEach(function(data){
                    });

                    content = '<tr>';
                    content += '<td>' + ID + '</td>'; //column1
                    content += '<td>' + Menu + '</td>';//column2
                    content += '<td>' + Values + '</td>';
                    content += '</tr>';
                }

                $('#ex-table').append(content);
                console.log(snapshot.val());
            });
            </script>

        </body>
    </head>
</html>