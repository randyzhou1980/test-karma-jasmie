using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

using PersonalInfo.Models;
using PetInfo.Service;

namespace PetInfo.Service.Tests
{
    public class ApiPetInfoTests
    {
        #region Constructor
        private readonly IPetInfoService _petInfoService;
        public ApiPetInfoTests()
        {
            _petInfoService = new ApiPetInfoService();
        }
        #endregion

        [Fact]
        public async Task PetInfoListConnectionFailedTest()
        {
            _petInfoService.Connection = null;

            await Assert.ThrowsAsync<InvalidOperationException>(() => _petInfoService.PetInfoList());
        }

        [Fact]
        public async Task PersonalDetailsCorrectTest()
        {
            _petInfoService.Connection = "http://agl-developer-test.azurewebsites.net/people.json";

            var result = await _petInfoService.PetInfoList();

            Assert.NotNull(result);
            Assert.True(result.Count() > 0);

            Assert.False(result.Any(r => string.IsNullOrWhiteSpace(r.Name)));
            Assert.False(result.Any(r => r.Age == 0));
            Assert.Equal(1, result.Count(r => r.Belonging == null));

            var people = result.Where(r => r.Name == "Bob").FirstOrDefault();
            Assert.NotNull(people);
            Assert.Equal(GenderType.Male, people.Gender);
            Assert.Equal(23, people.Age);
            Assert.Equal(2, people.TotalBelonging);

            var peopleHasPetsResult = result.Where(r => r.Belonging != null && r.Belonging.Count() > 0);
            Assert.NotNull(peopleHasPetsResult);
            Assert.True(peopleHasPetsResult.Any(r => r.Belonging.Any(b => !string.IsNullOrWhiteSpace(b.TypeName))));
            Assert.True(peopleHasPetsResult.Any(r => r.Belonging.Any(b => !string.IsNullOrWhiteSpace(b.Name))));
        }

        [Fact]
        public async Task PetDetailsCorrectTest()
        {
            _petInfoService.Connection = "http://agl-developer-test.azurewebsites.net/people.json";

            var result = await _petInfoService.PetInfoList();

            Assert.NotNull(result);
            Assert.True(result.Count() > 0);

            var people = result.Where(r => r.Name == "Bob").FirstOrDefault();
            Assert.NotNull(people.Belonging);
            Assert.Equal(2, people.Belonging.Count());
            Assert.Equal(1, people.Belonging.Count(b => b.TypeName.ToLower() == "cat" && b.Name.ToLower() == "garfield"));
            Assert.Equal(1, people.Belonging.Count(b => b.TypeName.ToLower() == "dog" && b.Name.ToLower() == "fido"));
        }
    }
}
