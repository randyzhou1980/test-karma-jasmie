using System;
using System.Collections.Generic;
using System.Text;

namespace PersonalInfo.Models.Belonging
{
    #region Definitions
    public enum SpeciesType
    {
        Cat,
        Dog,
        Fish,
    }
    #endregion

    public class Pet : BelongingBase, IBelonging
    {
        #region Properties
        public SpeciesType Type { get; set; }
        public override string TypeName {
            get { return Type.ToString(); }
        }
        #endregion

        #region Constructor
        public Pet() : base()
        {
        }
        #endregion
    }
}
