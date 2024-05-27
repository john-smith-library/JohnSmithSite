import { Application } from 'john-smith';
import { ObservableValue } from 'john-smith/reactive';
import { Value } from 'john-smith/view/components';

import 'john-smith/view/jsx';

class UserViewModel {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly bio: string
  ) {}
}

const johnSmithUser = new UserViewModel(
  'John',
  'Smith',
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent quis risus nunc. Praesent nulla massa, tincidunt ut
            nisi a, lobortis auctor risus. In tincidunt id massa sit amet finibus.`
);

const joeDoeUser = new UserViewModel(
  'Joe',
  'Doe',
  `Sed et bibendum mi. Sed aliquet, libero eget posuere iaculis,
            lectus massa consequat eros, vel sagittis ligula sem at lectus.
            Aenean porttitor suscipit consequat.`
);

class ApplicationViewModel {
  selectedUser = new ObservableValue<UserViewModel>(johnSmithUser);

  public toggleUser() {
    this.selectedUser.mutate(user =>
      user === johnSmithUser ? joeDoeUser : johnSmithUser
    );
  }
}

class UserDetailsView {
  constructor(private viewModel: UserViewModel) {}

  public template() {
    return (
      <section>
        <p>First Name: {this.viewModel.firstName}</p>
        <p>First Name: {this.viewModel.lastName}</p>
        <h3>Bio</h3>
        <p>{this.viewModel.bio}</p>
      </section>
    );
  }
}

const ApplicationView = (viewModel: ApplicationViewModel) => (
  <section class="app">
    <h1>User Details</h1>

    <Value view={UserDetailsView} model={viewModel.selectedUser} />

    <button _click={viewModel.toggleUser}>Toggle Users</button>
  </section>
);

const application = new Application();
const applicationViewModel = new ApplicationViewModel();

application.render('root', ApplicationView, applicationViewModel);
