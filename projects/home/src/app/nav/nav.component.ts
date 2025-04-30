import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
