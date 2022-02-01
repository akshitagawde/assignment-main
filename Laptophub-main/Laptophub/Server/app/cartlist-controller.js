const db = require('../db/models');
           const UserItem = db.UserItem;

           //select * from users => findAll

           exports.findAll=(req,res)=>{
            UserItem.findAll()
           .then(data=>res.json(data))
           .catch(err=>{
           res.status(500)
          .send({message:err.message || 'something want wrong'})
           });
          };

        // 2. seelct * from users where id=?=>findByPK

          exports.findByPk=(req,resp)=>{
          const id=parseInt(req.params.id);
          UserItem.findByPk(id)
         .then(data=>resp.json(data))
         .catch(err=>{
          resp.status(500)
             .send({message:err.message||
              `Something went wrong`})
         });
        };


       //insert into users (firstName,lastName,createdAt,updateAt) values(?,?,?,?) =>create(user)

        exports.create=(req,res)=>{
        if(!req.body.categoryName){
        res.status(400).send({
        message: "Content can not be empty!"
        });
          return;
        }

       const newUserItem ={
        ProductId : req.body.ProductId,
        productName : req.body.productName,
        Password : req.body.Password,
        Quantity : req.body.Quantity,
        TotalAmount : req.body.TotalAmount,
       createdAt:new Date(),
      updatedAt:new Date()
      }

      UserItem.create(newUserItem)
     .then(data=>res.json(data))
     .catch(err=>{
       res.status(500)
       .send({message:err.message || 'Something went wrong'});
      });
     };

     //update users set firstName=?, lastName=?,createdAt=?,updateAt=?

     exports.update=(req,res)=>{
     const id = req.params.id;
     UserItem.update(req.body, { where: { id: id } })
			.then(num => {
				if (num == 1) {
				res.send({
					message: `UserItem with id ${id} updated successfully.`
				});
				} else {
				res.send({
					message: `Cannot update UserItem with id=${id}. Maybe UserItem was not found or req.body is empty!`
				});
				}
			})
			.catch((err) => {
				res.status(500).send({
					message: err.message || " Some error retriving User data"
				})
			})
           };


       //delete from people where id=?

       exports.delete = (req, res) => {
       const id = req.params.id;
       UserItem.destroy({ where: { id: id } })
      .then(num => {
      if (num == 1) {
        res.send({ message: `UserItem with id=${id} deleted successfully!` });
      } else {
        res.send({ message: `Cannot delete UserItem with id=${id}. Maybe User was not found!` });
      }
      })
      .catch((err) => {
      res.status(500).send({
        message: err.message || " Could not delete User with id=" + id
      });
     });
    };