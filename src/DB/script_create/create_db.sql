create database if not exisis soporteti;

CREATE OR REPLACE TABLE ubicacion(
    id_ubicacion BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    calle VARCHAR(50) NOT NULL,
    CP INT NOT NULL,
    colonia VARCHAR(50) NOT NULL,
    referencias VARCHAR(50) NOT NULL
),
CREATE OR REPLACE TABLE tema (
    id_tema BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(250) NOT NULL,
    priordad INT NOT NULL
),
CREATE OR REPLACE TABLE area(
    id_area BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    id_ubicacion BIGINT NOT NULL,
    CONSTRAINT 'fk_id_ubicacion'
        FOREIGN KEY (id_ubicacion) REFERENCES ubicacion (id_ubicacion)
        ON DELETE CASCADE
        ON UPDATE RESTRICT
),
CREATE OR REPLACE TABLE sub_area (
    id_subarea BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_area_principal BIGINT,
    nombre VARCHAR(50) NOT NULL,
    id_ubicacion BIGINT NOT NULL,
    CONSTRAINT 'fk_id_ubicacion'
        FOREIGN KEY (id_ubicacion) REFERENCES ubicacion (id_ubicacion)
        ON DELETE CASCADE
        ON UPDATE RESTRICT,
    CONSTRAINT 'fk_id_area_p'
        FOREIGN KEY (id_area_principal) REFERENCES area (id_area)
        ON DELETE CASCADE
        ON UPDATE RESTRICT
),
CREATE OR REPLACE TABLE resp_area (
    id_resp_area BIGINIT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_responsable BIGINT NOT NULL,
    id_area BIGINT NOT NULL,
    CONSTRAINT 'fk_id_resp_area'
        FOREIGN KEY (id_responsable) REFERENCES usuario (id_usuario)
        ON DELETE CASCADE
        ON UPDATE RESTRICT
    CONSTRAINT 'fk_id_area'
        FOREIGN KEY (id_area) REFERENCES area (id_area)
        ON DELETE CASCADE
        ON UPDATE RESTRICT
),
CREATE OR REPLACE TABLE usuario (
    id_usuario BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    puesto VARCHAR(100) NOT NULL,
    password PASSWORD NOT NULL,
    telefono INT NOT NULL,
    creado_fecha TIMESTAMP NOT NULL,
    actualizado TIMESTAMP NOT NULL,
    creado_id_usuario BIGINT NOT NULL,
    CONSTRAINT 'fk_id_usuario'
        FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
        ON DELETE CASCADE
        ON UPDATE RESTRICT,
    CONSTRAINT 'fk_id_area'
        FOREIGN KEY (id_area) REFERENCES area (id_area)
        ON DELETE CASCADE
        ON UPDATE RESTRICT
),
CREATE OR REPLACE TABLE ticket (
    id_ticket BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    descripcion VARCHAR(250) NOT NULL,
    id_tema BIGINT NOT NULL,
    id_contacto BIGINT NOT NULL ,
    CONSTRAINT 'fk_id_contacto'
        FOREIGN KEY (id_contacto) REFERENCES usuario (id_usuario)
        ON DELETE CASCADE
        ON UPDATE RESTRICT,
    CONSTRAINT 'fk_id_tema'
        FOREIGN KEY (id_tema) REFERENCES area (id_tema)
        ON DELETE CASCADE
        ON UPDATE RESTRICT
),
CREATE OR REPLACE TABLE estatus (
    id_estatus BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_ticket BIGINT NOT NULL,
    estatus VARCHAR(20) NOT NULL,
    id_usuario BIGINT NOT NULL,
    cambio_fecha DATE NOT NULL,
    CONSTRAINT 'fk_id_ticket'
        FOREIGN KEY (id_ticlet) REFERENCES area (id_)
        ON DELETE CASCADE
        ON UPDATE RESTRICT,
    CONSTRAINT 'fk_id_usuario'
        FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
        ON DELETE CASCADE
        ON UPDATE RESTRICT
),
CREATE OR REPLACE TABLE mensaje (
    id_mensaje BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_ticket BIGINT NOT NULL,
    id_usuario BIGINT NOT NULL,
    mensaje VARCHAR(250) NOT NULL,
    fecha DATE NOT NULL,
    CONSTRAINT 'fk_id_ticket'
        FOREIGN KEY (id_ticket) REFERENCES area (id_)
        ON DELETE CASCADE
        ON UPDATE RESTRICT,
    CONSTRAINT 'fk_id_usuario'
        FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
        ON DELETE CASCADE
        ON UPDATE RESTRICT
),
CREATE OR REPLACE TABLE tarea(
    id_tarea BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    mes DATE NOT NULL,
    fecha_inicio DATE NOT NULL,
    tiempo_invertido DATE NOT NULL,
    tiempo_final DATE,
    id_usuario BIGINT NOT NULL,
    tiempo_maximo DATE NOT NULL,
    id_area_ti BIGINT NOT NULL,
    id_tema BIGINT NOT NULL,
    id_ubicacion BIGINT NOT NULL,
    id_ticket BIGINT NOT NULL,
    CONSTRAINT 'fk_id_usuario'
        FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
        ON DELETE CASCADE
        ON UPDATE RESTRICT,
    CONSTRAINT 'fk_id_area'
        FOREIGN KEY (id_area_ti) REFERENCES area (id_area)
        ON DELETE CASCADE
        ON UPDATE RESTRICT,
    CONSTRAINT 'fk_id_tema'
        FOREIGN KEY (id_tema) REFERENCES tema (id_tema)
        ON DELETE CASCADE
        ON UPDATE RESTRICT,
    CONSTRAINT 'fk_id_ubicacion'
        FOREIGN KEY (id_ubicacion) REFERENCES ubicacion (id_ubicacion)
        ON DELETE CASCADE
        ON UPDATE RESTRICT,
    CONSTRAINT 'fk_id_ticket'
        FOREIGN KEY (id_ticlet) REFERENCES area (id_)
        ON DELETE CASCADE
        ON UPDATE RESTRICT
),
CREATE OR REPLACE TABLE evidencias(
    id_evidencia BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_ticket BIGINT NOT NULL,
    id_usuario BIGINT NOT NULL,
    evidenia BIT NOT NULL,
    CONSTRAINT 'fk_id_ticket'
        FOREIGN KEY (id_ticlet) REFERENCES area (id_)
        ON DELETE CASCADE
        ON UPDATE RESTRICT,
    CONSTRAINT 'fk_id_usuario'
        FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
        ON DELETE CASCADE
        ON UPDATE RESTRICT
),
CREATE OR REPLACE TABLE kpi(
    id_kpi BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    id_area_ti BIGINT NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    CONSTRAINT 'fk_id_area'
        FOREIGN KEY (id_area_ti) REFERENCES area (id_area)
        ON DELETE CASCADE
        ON UPDATE RESTRICT
),
CREATE OR REPLACE TABLE kpi_hstorico(
    id_kpi_h BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_kpi BIGINT NOT NULL,
    id_usuaro BIGINT NOT NULL,
    mes DATE NOT NULL
    cumplimiemto BOOLEAN
    num_tickets int
    CONSTRAINT 'fk_id_kpi'
        FOREIGN KEY (id_kpi) REFERENCES kpi (id_kpi)
        ON DELETE CASCADE
        ON UPDATE RESTRICT,
)
;