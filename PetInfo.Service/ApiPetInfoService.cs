using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

using PersonalInfo.Models;

namespace PetInfo.Service
{
    public class ApiPetInfoService : PetInfoServiceBase, IPetInfoService
    {
        #region Properties
        private JsonSerializerSettings SerializerSettings { get; set; }
        #endregion

        #region Constructor
        public ApiPetInfoService() : base()
        {
        }
        protected override void Initialization()
        {
            base.Initialization();

            SerializerSettings = new JsonSerializerSettings();
            SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }
        #endregion

        #region Functions
        public async Task<IEnumerable<IPersonalInfo>> PetInfoList()
        {
            var content = await GetDataContent();

            if (string.IsNullOrWhiteSpace(content))
                return null;

            return JsonConvert.DeserializeObject<IEnumerable<PetInfo>>(content, SerializerSettings);
        }

        private async Task<string> GetDataContent()
        {
            try
            {
                HttpClient client = new HttpClient();
                HttpResponseMessage response = await client.GetAsync(Connection);
                response.EnsureSuccessStatusCode();

                return await response.Content.ReadAsStringAsync();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion
    }
}
