using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiCuentasGoogle.Data
{
    public class UsuariosData
    {
        public bool BuscarUsuario(string username, string password)
        {
            using (var context = new CuentasGoogleEntityFramework())
            {
                var data = context.UsuariosGoogle;
                bool encontrado = false;

                foreach (var value in data)
                {
                    if (value.EmailAddress == username && value.Password == password)
                    {
                        encontrado = true;
                    }
                }

                return encontrado;
            }
        }
    }
}