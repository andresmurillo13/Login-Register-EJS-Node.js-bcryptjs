const empleados = {};

const bcryptjs = require('bcryptjs');

empleados.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM empleados', (err, empleados) => {
      if (err) {
        res.json(err);
      }

      res.render('formEmpleados', {
        data: empleados
      });
    });
  });
};

empleados.save = async (req, res) => {

  const { nombre_completo, correo_electronico, contraseña_empleado, rol_empleado } = req.body;
  console.log(req.body)
  
    let passwordHash = await bcryptjs.hash(contraseña_empleado, 8);
    console.log(passwordHash +'  '+  'Contraseña encryptada')

    req.getConnection( (err, conn) => {
      conn.query('INSERT INTO empleados set ?', {nombre_completo,correo_electronico,contraseña_empleado:passwordHash, rol_empleado}, (err, empleados) => {
        if (err) {
          console.log("ocurrio un error"+ err)
        } else {
          res.redirect('/');
          console.log('exito')
        }
      })
    })
  
    
  
  
};


empleados.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM empleados WHERE id = ?", [id], (err, rows) => {
      res.render('editEmpleados', {
        data: rows[0]
      })
    });
  });
};

empleados.update = (req, res) => {
  const { id } = req.params;
  const newEmpleado = req.body;
  req.getConnection((err, conn) => {

    conn.query('UPDATE empleados set ? where id = ?', [newEmpleado, id], (err, rows) => {
      res.redirect('/');
    });
  });
};

empleados.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM empleados WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = empleados;