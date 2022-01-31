const db = require('../db/models');
           const Payment = db.Payment;

           //select * from users => findAll

           exports.findAll=(req,res)=>{
            Payment.findAll()
           .then(data=>res.json(data))
           .catch(err=>{
           res.status(500)
          .send({message:err.message || 'something want wrong'})
           });
          };

        // 2. seelct * from users where id=?=>findByPK

          exports.findByPk=(req,resp)=>{
          const id=parseInt(req.params.id);
          Payment.findByPk(id)
         .then(data=>resp.json(data))
         .catch(err=>{
          resp.status(500)
             .send({message:err.message||
              `Something went wrong`})
         });
        };


       //insert into users (firstName,lastName,createdAt,updateAt) values(?,?,?,?) =>create(user)

        exports.create=(req,res)=>{
        if(!req.body.Total_Amount){
        res.status(400).send({
        message: "Content can not be empty!"
        });
          return;
        }

       const newPayment ={
        Order_Id : req.body.Order_Id,
        Total_Amount : req.body.Total_Amount,
        Payment_Mode : req.body.Payment_Mode,
        createdAt:new Date(),
        updatedAt:new Date()
      }

      Payment.create(newPayment)
     .then(data=>res.json(data))
     .catch(err=>{
       res.status(500)
       .send({message:err.message || 'Something went wrong'});
      });
     };

     //update users set firstName=?, lastName=?,createdAt=?,updateAt=?

     exports.update=(req,res)=>{
     const id = req.params.id;
     Payment.update(req.body, { where: { id: id } })
			.then(num => {
				if (num == 1) {
				res.send({
					message: `Payment with id ${id} updated successfully.`
				});
				} else {
				res.send({
					message: `Cannot update Payment with id=${id}. Maybe Payment was not found or req.body is empty!`
				});
				}
			})
			.catch((err) => {
				res.status(500).send({
					message: err.message || " Some error retriving Payment data"
				})
			})
           };


       //delete from people where id=?

       exports.delete = (req, res) => {
       const id = req.params.id;
       Payment.destroy({ where: { id: id } })
      .then(num => {
      if (num == 1) {
        res.send({ message: `Payment with id=${id} deleted successfully!` });
      } else {
        res.send({ message: `Cannot delete Payment with id=${id}. Maybe User was not found!` });
      }
      })
      .catch((err) => {
      res.status(500).send({
        message: err.message || " Could not delete Payment with id=" + id
      });
     });
    };