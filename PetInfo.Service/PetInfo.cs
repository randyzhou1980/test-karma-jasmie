using System.Collections.Generic;

using PersonalInfo.Models;
using PersonalInfo.Models.Belonging;

namespace PetInfo.Service
{
    public class PetInfo : PersonalInfoBase, IPersonalInfo
    {
        #region Properties
        public List<Pet> Pets { get; set; }

        public int TotalBelonging {
            get
            {
                return Pets != null ? Pets.Count : 0;
            }
        }
        public IEnumerable<IBelonging> Belonging {
            get
            {
                return Pets != null && Pets.Count > 0 ? Pets : null;
            }
        }
        #endregion

        #region Constructor
        public PetInfo(): base()
        {
            Pets = new List<Pet>();
        }
        #endregion
    }
}
