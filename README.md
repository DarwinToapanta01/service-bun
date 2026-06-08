# Sistema de Gestión Médica basado en Microservicios

## Descripción

Este proyecto implementa una arquitectura basada en microservicios para la gestión de pacientes, médicos y citas médicas. La solución fue desarrollada utilizando Bun, Fastify, Sequelize y PostgreSQL, y desplegada mediante contenedores Docker orquestados con Docker Compose.

La arquitectura está compuesta por tres microservicios independientes:

* **Servicio de Pacientes:** Gestiona la información de los pacientes.
* **Servicio de Médicos:** Gestiona la información de los médicos.
* **Servicio de Citas:** Gestiona las citas médicas y valida la existencia de pacientes y médicos antes de registrar una cita.

---

## Arquitectura del Sistema

```text
Cliente
   │
   ├──────────────► Servicio Paciente (Puerto 3001)
   │
   ├──────────────► Servicio Médico (Puerto 3002)
   │
   └──────────────► Servicio Cita (Puerto 3003)
                            │
                            ├── Consulta Pacientes
                            └── Consulta Médicos

PostgreSQL
   ├── Base de datos paciente
   ├── Base de datos medico
   └── Base de datos cita
```

---

## Tecnologías Utilizadas

* Bun
* TypeScript
* Fastify
* Sequelize ORM
* PostgreSQL
* Docker
* Docker Compose
* Thunder Client
* pgAdmin 4

---

## Estructura del Proyecto

```text
services-unidad2/
│
├── servicio-paciente/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── router/
│   │   └── index.ts
│
├── servicio-medico/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── router/
│   │   └── index.ts
│
├── servicio-cita/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── router/
│   │   └── index.ts
│
├── init.sql
├── docker-compose.yml
└── README.md
```

---

## Bases de Datos

El proyecto utiliza PostgreSQL y crea automáticamente las siguientes bases de datos:

* paciente
* medico
* cita

Estas bases son generadas mediante el archivo:

```sql
init.sql
```

---

## Requisitos Previos

Antes de ejecutar el proyecto es necesario tener instalado:

* Docker Desktop
* Docker Compose
* Git
* Visual Studio Code (opcional)
* pgAdmin 4 (opcional)

---

## Ejecución del Proyecto

### Clonar el repositorio

```bash
git clone https://github.com/usuario/repositorio.git
```

### Ingresar al proyecto

```bash
cd services-unidad2
```

### Construir e iniciar los contenedores

```bash
docker compose up --build
```

### Detener los contenedores

```bash
docker compose down
```

### Eliminar contenedores y volúmenes

```bash
docker compose down -v
```

---

## Servicios Disponibles

| Servicio   | Puerto |
| ---------- | ------ |
| Pacientes  | 3001   |
| Médicos    | 3002   |
| Citas      | 3003   |
| PostgreSQL | 5432   |

---

## Pruebas

Las pruebas de los servicios fueron realizadas utilizando Thunder Client para verificar:

* Creación de pacientes.
* Consulta de pacientes.
* Creación de médicos.
* Consulta de médicos.
* Registro de citas.
* Comunicación entre microservicios.

---

## Características Implementadas

* Arquitectura basada en microservicios.
* Comunicación entre servicios mediante HTTP.
* Persistencia de datos con PostgreSQL.
* ORM Sequelize.
* Despliegue mediante Docker.
* Orquestación con Docker Compose.
* APIs REST independientes.

---

## Autor

Darwin Toapanta
