using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using BackEnd.Services;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistroDeUsuario : Controller
    {
        private readonly IConfiguration _config;


        public RegistroDeUsuario(IConfiguration config)
        { //pesquisar 
            _config = config;
        }


        [HttpPost("cadastro")]
        public async Task<ActionResult> RegistroUsuario([FromBody] Registro usuarioNovo)
        {
            try
            {
                var conectString = _config.GetConnectionString("ConexaoPadrao");
                using (var connection = new SqlConnection(conectString))
                {

                    var senhaHash = BCrypt.Net.BCrypt.HashPassword(usuarioNovo.Senha);

                    var query = "INSERT INTO UsuarioSenha (Usuario,Senha) VALUES (@Usuario,@Senha)";
                    var command = new SqlCommand(query, connection);

                    command.Parameters.Add(new SqlParameter("@Usuario", usuarioNovo.Email));
                    command.Parameters.Add(new SqlParameter("@Senha", senhaHash));

                    await connection.OpenAsync();

                    var linhasAfetadas = await command.ExecuteNonQueryAsync();
                    Console.WriteLine(usuarioNovo.Senha, usuarioNovo.Email);

                    if (linhasAfetadas > 0)
                    {
                        return Ok("usuario registrado com sucesso");
                        
                    }
                    else
                    {
                        return BadRequest("usuario não registrado");
                    }

                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"erro do sevidor {ex.Message}");
            }
        }

        [HttpPost("login")]

        public async Task<ActionResult> Login ([FromBody] Registro UsuarioDeLogin)
        {
            try{
                using (var connection = new SqlConnection(_config.GetConnectionString("ConexaoPadrao")))
                {
                    connection.Open();
                    var query = "SELECT * FROM UsuarioSenha WHERE Usuario = @Usuario";
                    var command = new SqlCommand(query,connection);

                    command.Parameters.Add(new SqlParameter("@Usuario",UsuarioDeLogin.Email));

                    var reader = await command.ExecuteReaderAsync();

                    if(reader.Read())
                    {
                        var senha = reader["Senha"].ToString();

                        if(BCrypt.Net.BCrypt.Verify(UsuarioDeLogin.Senha,senha))
                        {
                            return Ok("Login efetuado com sucesso");

                        }
                        else{
                            return BadRequest("Usuario ou Senha incorretas");
                        }

                    }else{
                        return Unauthorized("Usuario ou Senha incorretas");
                    }
                }

            }
            catch(Exception ex){
                return StatusCode(500, $"erro do sevidor {ex.Message}");
            }
        }




    }

}
