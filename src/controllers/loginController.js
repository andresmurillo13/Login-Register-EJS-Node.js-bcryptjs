const iniciarSesion = {};
const bcryptjs = require('bcryptjs');
const connection = require('express-myconnection');

iniciarSesion.login = async (req, res) => {
    const correo_electronico = req.body.correo_electronico;
    const contraseña_empleado = req.body.contraseña_empleado;
    // console.log(res);
    console.log(req.body.correo_electronico, req.body.contraseña_empleado);
    let passwordHash = await bcryptjs.hash(contraseña_empleado, 8);  
  
    if (correo_electronico && contraseña_empleado) {
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM empleados WHERE correo_electronico = ?', [correo_electronico],
                async (err, resultado) => {
                if (resultado.lenght == 0 || !(await bcryptjs.compare(contraseña_empleado, resultado[0].contraseña_empleado))) {
                    res.send('USUARIO O CONTRASEÑA INCORRECTA')
                    
                } else {
                    res.render('index');
                }
                });
            
        });
    }
  }


  module.exports= iniciarSesion;
  