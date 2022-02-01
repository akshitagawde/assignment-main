const db = require('../db/models');
           const productCategory = db.productCategory;

           //select * from users => findAll

           exports.findAll=(req,res)=>{
            productCategory.findAll()
           .then(data=>res.json(data))
           .catch(err=>{
           res.status(500)
          .send({message:err.message || 'something want wrong'})
           });
          };

        // 2. seelct * from users where id=?=>findByPK

          exports.findByPk=(req,resp)=>{
          const id=parseInt(req.params.id);
          productCategory.findByPk(id)
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

       const newCategory ={
       categoryName : req.body.categoryName,
       createdAt:new Date(),
      updatedAt:new Date()
      }

      productCategory.create(newCategory)
     .then(data=>res.json(data))
     .catch(err=>{
       res.status(500)
       .send({message:err.message || 'Something went wrong'});
      });
     };

     //update users set firstName=?, lastName=?,createdAt=?,updateAt=?

     exports.update=(req,res)=>{
     const id = req.params.id;
     productCategory.update(req.body, { where: { id: id } })
			.then(num => {
				if (num == 1) {
				res.send({
					message: `productCategory with id ${id} updated successfully.`
				});
				} else {
				res.send({
					message: `Cannot update productCategory with id=${id}. Maybe productCategory was not found or req.body is empty!`
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
       productCategory.destroy({ where: { id: id } })
      .then(num => {
      if (num == 1) {
        res.send({ message: `productCategory with id=${id} deleted successfully!` });
      } else {
        res.send({ message: `Cannot delete productCategory with id=${id}. Maybe User was not found!` });
      }
      })
      .catch((err) => {
      res.status(500).send({
        message: err.message || " Could not delete User with id=" + id
      });
     });
    };