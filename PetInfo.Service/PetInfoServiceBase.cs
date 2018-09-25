using System;
using System.Collections.Generic;
using System.Text;

namespace PetInfo.Service
{
    public abstract class PetInfoServiceBase
    {
        #region Properties
        public string Connection { get; set; }
        #endregion

        #region Constructor
        public PetInfoServiceBase()
        {
            Initialization();
        }
        protected virtual void Initialization()
        {

        }
        #endregion
    }
}
