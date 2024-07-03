<?php
    class  Conexion{
        public static function Conectar(){
            define('servidor','localhost');
            define('nombre_db','soporteti');
            define('usuario','root');
            define('password','Juan5315');
            $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES uft8');
            try{
                $conexion = new PDO("mysql:host=".servidor."; dbname=".nombre_db, usuario, password, $opciones);
                return $conexion;
            }catch (Exception $e){
                die("El error de conexión es: ". $e->getMessage());
            }
        }
    }
?>

//************* script conexion mysql ********** //
function Conectarse()
{
$host='localhost';
$usuariodb='usuariocpanel_usuariodb';
$passwdb='passworddb';
$nombredb='usuariocpanel_nombredb';

if (!($link=mysql_connect($host,$usuariodb,$passwdb)))
{
echo "Error conectando a la base de datos.";
exit();
}
if (!mysql_select_db($nombredb,$link))
{
echo "Error seleccionando la base de datos, verifique que el nombre de usuario utilizado este asociado a la base de datos.";
exit();
}
return $link;
}

$link=Conectarse();
echo "Conexión con la base de datos conseguida.
";
mysql_close($link); //cierra la conexion
//************* script conexión mysql **********//