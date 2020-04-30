using System.Web.Http;
using ApiCuentasGoogle.Data;

namespace ApiCuentasGoogle.Controllers
{
    [RoutePrefix("OperacionUsuarios")]
    public class OperacionUsuarioController : ApiController
    {
        [HttpGet]
        [Route("LoguearUsuario")]
        public string LoguearUsuario(string username, string password)
        {
            UsuariosData dataUser = new UsuariosData();

            return dataUser.BuscarUsuario(username, password);
        }

    }
}
