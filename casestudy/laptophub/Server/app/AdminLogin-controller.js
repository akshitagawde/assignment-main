const db = require('../db/models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'req.body.Password';
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
const AdminLogin = db.AdminLogin;
bcrypt.compareSync('req.body.Password', hash);

           //select * from users => findAll

           exports.findAll=(req,res)=>{
            AdminLogin.findAll()
           .then(data=>res.json(data))
           .catch(err=>{
           res.status(500)
          .send({message:err.message || 'something want wrong'})
           });
          };

        // 2. seelct * from users where id=?=>findByPK

          exports.findByPk=(req,resp)=>{
          const id=parseInt(req.params.id);
          AdminLogin.findByPk(id)
         .then(data=>resp.json(data))
         .catch(err=>{
          resp.status(500)
             .send({message:err.message||
              `Something went wrong`})
         });
        };


       //insert into users (firstName,lastName,createdAt,updateAt) values(?,?,?,?) =>create(user)

        exports.create=(req,res)=>{
        if(!req.body.FullName){
        res.status(400).send({
        message: "Content can not be empty!"
        });
          return;
        }

       const newAdminLogin ={
        FullName : req.body.FullName,
        Email : req.body.Email,
        Password : hash,
        createdAt:new Date(),
        updatedAt:new Date()
      }

      AdminLogin.create(newAdminLogin)
     .then(data=>res.json(data))
     .catch(err=>{
       res.status(500)
       .send({message:err.message || 'Something went wrong'});
      });
     };

     //update users set firstName=?, lastName=?,createdAt=?,updateAt=?

     exports.update=(req,res)=>{
     const id = req.params.id;
     AdminLogin.update(req.body, { where: { id: id } })
			.then(num => {
				if (num == 1) {
				res.send({
					message: `AdminLogin with id ${id} updated successfully.`
				});
				} else {
				res.send({
					message: `Cannot  AdminLogin with id=${id}. Maybe AdminLogin was not found or req.body is empty!`
				});
				}
			})
			.catch((err) => {
				res.status(500).send({
					message: err.message || " Some error retriving AdminLogin data"
				})
			})
           };


       //delete from people where id=?

       exports.delete = (req, res) => {
       const id = req.params.id;
       AdminLogin.destroy({ where: { id: id } })
      .then(num => {
      if (num == 1) {
        res.send({ message: `AdminLogin with id=${id} deleted successfully!` });
      } else {
        res.send({ message: `Cannot delete AdminLogin with id=${id}. Maybe AdminLogin was not found!` });
      }
      })
      .catch((err) => {
      res.status(500).send({
        message: err.message || " Could not delete AdminLogin with id=" + id
      });
     });
    };