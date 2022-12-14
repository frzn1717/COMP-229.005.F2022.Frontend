import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Inventory } from "../../models/inventory.model";
import { InventoryRepository } from "../../models/inventory.repository";

@Component({
    selector: "list-inventory",
    templateUrl: "list.component.html"
})

export class ListComponent{

    title = 'Inventory List';    

    constructor(public repository: InventoryRepository,
        private router: Router) 
    {
        repository.setInventory();
    }    

    get inventoryList(): Inventory[] {
        return this.repository.getInventory();        
    }


    deleteMethod(id: string) {
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("inventory/delete/"+id);
        }
    }   
}