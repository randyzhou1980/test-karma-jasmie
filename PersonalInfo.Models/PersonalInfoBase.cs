namespace PersonalInfo.Models
{
    #region Definitions
    public enum GenderType
    {
        Male,
        Female,
    }
    #endregion
    public abstract class PersonalInfoBase
    {
        #region Properties
        public int Id { get; private set; }
        public string Name { get; set; }
        public GenderType Gender { get; set; }
        public int Age { get; set; }
        #endregion
    }
}
