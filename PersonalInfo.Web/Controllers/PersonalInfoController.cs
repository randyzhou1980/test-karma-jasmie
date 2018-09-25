using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

using PersonalInfo.Web.Models;
using PersonalInfo.Models;
using PetInfo.Service;

namespace PersonalInfo.Web.Controllers
{
    [Route("api/[controller]")]
    public class PersonalInfoController : Controller
    {
        #region Constructor
        private readonly IPetInfoService _petService;
        private readonly IOptions<ContextSettings> _contextSetting;

        public PersonalInfoController(IPetInfoService petService, IOptions<ContextSettings> contextSetting)
        {
            _petService = petService;
            _contextSetting = contextSetting;
        }
        #endregion

        [HttpGet("[action]")]
        public async Task<IEnumerable<IPersonalInfo>> PetInfoSummary()
        {
            _petService.Connection = _contextSetting.Value.Connection + _contextSetting.Value.PetsInfo;
            return await _petService.PetInfoList();
        }
    }
}
