import { RouterModule, Routes } from "@angular/router";
import { NewWhiskeyComponent } from "./new-whiskey/new-whiskey.component";
import { WhiskeyDetailsComponent } from "./whiskey-details/whiskey-details.component";
import { WhiskeyListComponent } from "./whiskey-list/whiskey-list.component";

const routes:Routes=[
      {
            path:'catalog',
            component:WhiskeyListComponent
      },
      {
            path:'new',
            component:NewWhiskeyComponent
      },
      {
            path:':id',
            component:WhiskeyDetailsComponent
      }
      
]

export const WhiskeyRoutingModule=RouterModule.forChild(routes)