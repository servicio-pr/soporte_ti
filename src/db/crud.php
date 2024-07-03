<?php 
    include_once 'conexion.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();
    $_POST = json_decode(file_get_contents("php://input"),true);
    $opcion = (isset($_POST["opcion"])) ? $_POST["opcion"] :"";

    $id_kpi_h = (isset($_POST["id_kpi"])) ? $_POST["id_kpi"] : "";
    $id_kpi = (isset($_POST["id_kpi"])) ? $_POST["id_kpi"] : "" ;
    $analista = (isset($_POST["analista"])) ? $_POST["analista"] :  "";
    $mes = (isset( $_POST["mes"])) ? $_POST["mes"] : "" ;
    $area = (isset( $_POST["area"])) ? $_POST["area"] : "" ;
    $numero =(isset( $_POST["numero"])) ? $_POST["numero"] : "" ;
    $tiempo =(isset( $_POST["tiempo"])) ? $_POST["tiempo"] : "" ;

    switch($opcion){
        case 1: //Nuevo ticket
            $consulta = "INSERT INTO ticket ()";
        break;
        case 2: //Consulta kpi_direccion
            $consulta = "SELECT usuario.nombre, kh.mes, kpi.nombre, area.nombre, COUNT(kh.id_kpi_h), COUNT()";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            break;
    }