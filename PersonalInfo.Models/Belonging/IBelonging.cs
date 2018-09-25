using System;
using System.Collections.Generic;
using System.Text;

namespace PersonalInfo.Models.Belonging
{
    public interface IBelonging
    {
        int Id { get; }
        int PersonId { get; set; }
        string Name { get; set; }

        string TypeName { get; }
    }
}
