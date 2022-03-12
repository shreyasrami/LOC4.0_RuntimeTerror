from django.urls import path
from .views import CrowdFunding, FundingComment, FundingUpdate

urlpatterns = [
    path('CrowdFunding/', CrowdFunding.as_view(),
         name="create_crowd_funding"),
    # path('ngoFundingDetails/', NGOFundingDetails.as_view(),
    #      name='ngo_funding_details'),
    path('FundingUpdate/', FundingUpdate.as_view(),
         name='create_funding_update'),
    # path('getFundingUpdate/', GetFundingUpdate.as_view(),
    #  name='get_funding_update'),
    path('FundingComment/', FundingComment.as_view(),
         name='create_funding_comment'),
    # path('getFundingComment/', GetFundingComment.as_view(),
    #      name='get_funding_comment')
]
