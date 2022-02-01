const db = require('../db/models');
           const Customer = db.Customer;

           //select * from users => findAll

           exports.findAll=(req,res)=>{
            Customer.findAll()
           .then(data=>res.json(data))
           .catch(err=>{
           res.status(500)
          .send({message:err.message || 'something want wrong'})
           });
          };

        // 2. seelct * from users where id=?=>findByPK

          exports.findByPk=(req,resp)=>{
          const id=parseInt(req.params.id);
          Customer.findByPk(id)
         .then(data=>resp.json(data))
         .catch(err=>{
          resp.status(500)
             .send({message:err.message||
              `Something went wrong`})
         });
        };


       //insert into users (firstName,lastName,createdAt,updateAt) values(?,?,?,?) =>create(user)

        exports.create=(req,res)=>{
        if(!req.body.Name){
        res.status(400).send({
        message: "Content can not be empty!"
        });
          return;
        }

       const newCustomer ={
        Name : req.body.Name,
        Email : req.body.Email,
        Mobileno : req.body.Mobileno,
        Address : req.body.Address,
        password : req.body.password,
        createdAt:new Date(),
        updatedAt:new Date()
      }

      Customer.create(newCustomer)
     .then(data=>res.json(data))
     .catch(err=>{
       res.status(500)
       .send({message:err.message || 'Something went wrong'});
      });
     };

     //update users set firstName=?, lastName=?,createdAt=?,updateAt=?

     exports.update=(req,res)=>{
     const id = req.params.id;
     Customer.update(req.body, { where: { id: id } })
			.then(num => {
				if (num == 1) {
				res.send({
					message: `Customer with id ${id} updated successfully.`
				});
				} else {
				res.send({
					message: `Cannot  Customer with id=${id}. Maybe Product was not found or req.body is empty!`
				});
				}
			})
			.catch((err) => {
				res.status(500).send({
					message: err.message || " Some error retriving Product data"
				})
			})
           };


       //delete from people where id=?

       exports.delete = (req, res) => {
       const id = req.params.id;
       Customer.destroy({ where: { id: id } })
      .then(num => {
      if (num == 1) {
        res.send({ message: `Customer with id=${id} deleted successfully!` });
      } else {
        res.send({ message: `Cannot delete Customer with id=${id}. Maybe User was not found!` });
      }
      })
      .catch((err) => {
      res.status(500).send({
        message: err.message || " Could not delete Product with id=" + id
      });
     });
    };