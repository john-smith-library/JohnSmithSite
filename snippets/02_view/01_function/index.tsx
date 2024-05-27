import { Application } from 'john-smith';
import 'john-smith/view/jsx';

class ApplicationViewModel {
  public readonly message = 'Hello, World!';
}

// This is a View defined as an arrow function
const ApplicationView = (viewModel: ApplicationViewModel) => {
  return (
    <section>
      <h1>View as a function demo</h1>

      <p>This is the view markup.</p>

      <p>
        This is a message from <i>ViewModel</i>: {viewModel.message}
      </p>
    </section>
  );
};

new Application().render('root', ApplicationView, new ApplicationViewModel());
