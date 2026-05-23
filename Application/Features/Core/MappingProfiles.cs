using AutoMapper;
using Domain.Entities;

namespace Application.Features.Core;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Activity, Activity>();
    }
}