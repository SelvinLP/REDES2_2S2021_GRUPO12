CREATE TABLE Reporte(
	ReporteId   	INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	Carnet		VARCHAR(10) NULL,
	Nombre		VARCHAR(40) NULL,
	Proyecto	VARCHAR(40) NULL,
	Fecha		DATE NULL,
	Cuerpo		VARCHAR(300) NULL,
	Servidor	VARCHAR(10) NULL
);
	ENGINE = INNODB;