using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ai_center_final.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly ILogger<PatientController> _logger;

        public PatientController(ILogger<PatientController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public Patient Get()
        {
            return new Patient();
        }

    }
}
