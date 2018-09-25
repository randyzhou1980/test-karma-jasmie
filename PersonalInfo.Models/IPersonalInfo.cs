using System.Collections.Generic;

using PersonalInfo.Models.Belonging;

namespace PersonalInfo.Models
{
    public interface IPersonalInfo
    {
        int Id { get; }
        string Name { get; set; }
        GenderType Gender { get; set; }
        int Age { get; set; }
        int TotalBelonging { get; }

        IEnumerable<IBelonging> Belonging { get; }
    }
}
