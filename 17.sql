sequences

create sequence test;

select nextval('test')

select currval('test')

select lastval()

select setval('test',15)

select nextval('test')

create sequence test2 increment 5;

select nextval('test2')

CREATE SEQUENCE test3
increment 50
minvalue 500
maxvalue 2000
start 1000

select nextval('test3')

create sequence pet
increment 7
start 8

select nextval('pet')
select max(employeeid) from employees

create sequence if not exists employees_employeeid_seq
 start with 70 owned by employees.employeeid
 
 select max(orderid) from orders

 
 create sequence if not exists orders_orderid_seq
 start with 11080  
 
 alter table orders
 alter column  orderid set default nextval(' orders_orderid_seq')
 

ALTER SEQUENCE employees_employee_seq RESTART WITH 1000
SELECT nextval('employees_employee_seq')

ALTER SEQUENCE orders_orderid_seq RESTART WITH 20000
SELECT nextval('orders_orderid_seq')

ALTER SEQUENCE test RENAME TO test_sequence_1

ALTER SEQUENCE test2 RENAME TO test_sequence_four

DROP SEQUENCE test_sequence_1

DROP SEQUENCE test_sequence_four



DROP TABLE IF EXISTS exes;

CREATE TABLE exes (
exid SERIAL,
name varchar(255)
);
INSERT INTO exes (name) VALUES ('Carrie') RETURNING exid

DROP TABLE IF EXISTS pets;

CREATE TABLE pets (
petid SERIAL,
name varchar(255)
);

INSERT INTO pets (name) VALUES ('Fluffy') RETURNING petid;


