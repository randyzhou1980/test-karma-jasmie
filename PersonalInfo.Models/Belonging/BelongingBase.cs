using System;
using System.Collections.Generic;
using System.Text;

namespace PersonalInfo.Models.Belonging
{
    public abstract class BelongingBase
    {
        #region Properties
        public int Id { get; private set; }
        public int PersonId { get; set; }
        public string Name { get; set; }

        public abstract string TypeName { get; }
        #endregion

        #region Constructor
        public BelongingBase()
        {
        }
        #endregion
    }
}
