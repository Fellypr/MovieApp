using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations; //Para ter o fucionamento das validações

namespace BackEnd.Services
{
    public class Registro
    {
        public int IdUsuario { get; set; }
        [Required(ErrorMessage = "O campo senha é obrigatório")]
        [DataType(DataType.Password)]
        [MinLength(6, ErrorMessage = "A senha deve ter no mínimo 6 caracteres") ]
        public string Senha { get; set; }
        
        [Required(ErrorMessage = "O campo senha é obrigatório")]
        [EmailAddress(ErrorMessage = "Email Invalido")]
        public string Email { get; set; }
    }
}