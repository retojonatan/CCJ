using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiCuentasGoogle.Data
{
    public class UsuariosData
    {
        public string BuscarUsuario(string username, string password)
        {
            using (var context = new CuentasGoogleEntity())
            {
                var data = context.UsuariosGoogle;
                string tipo = "";

                foreach (var value in data)
                {
                    if (value.EmailAddress == username && value.Password == password)
                    {
                        tipo = value.Department;
                    }
                }

                return tipo;
            }
        }
    }
}