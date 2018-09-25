using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

using PersonalInfo.Models;

namespace PetInfo.Service
{
    public interface IPetInfoService
    {
        string Connection { get; set; }

        Task<IEnumerable<IPersonalInfo>> PetInfoList();
    }
}
