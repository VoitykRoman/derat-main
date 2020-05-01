import { Injectable } from '@angular/core';

@Injectable()
export class TranslateService {
    language = 'ua';

    map: Map<string, string> = new Map<string, string>();

    /**
     *
     */
    constructor() {
        this.map.set('enHome', 'Home');
        this.map.set('uaHome', 'Головна');

        this.map.set('enAbout us', 'About us');
        this.map.set('uaAbout us', 'Про нас');

        this.map.set('enServices', 'Services');
        this.map.set('uaServices', 'Послуги');

        this.map.set('enOur team', 'Our team');
        this.map.set('uaOur team', 'Команда');

        this.map.set('enOur licenses', 'Our licenses');
        this.map.set('uaOur licenses', 'Сертифікати');

        this.map.set('enContact us', 'Contact us');
        this.map.set('uaContact us', 'Контакти');

        this.map.set('enDeratization', 'Deratization');
        this.map.set('uaDeratization', 'Дератизація');

        this.map.set('enDisinsection', 'Disinsection');
        this.map.set('uaDisinsection', 'Дезінсекція');

        this.map.set('enDeodorization', 'Deodorization');
        this.map.set('uaDeodorization', 'Деодорація');

        this.map.set('enDisinfection', 'Disinfection');
        this.map.set('uaDisinfection', 'Дезінфекція');

        this.map.set('enMenu', 'Menu');
        this.map.set('uaMenu', 'Меню');

        this.map.set('enSign in', 'Sign in');
        this.map.set('uaSign in', 'Авторизуватись');

        this.map.set('enLogout', 'Logout');
        this.map.set('uaLogout', 'Вийти');

        this.map.set('enLogin', 'Login');
        this.map.set('uaLogin', 'Авторизуватись');

        this.map.set('enLoginButton', 'Login');
        this.map.set('uaLoginButton', 'Увійти');

        this.map.set('enEmail', 'Email');
        this.map.set('uaEmail', 'Ел. Пошта');

        this.map.set('enPassword', 'Password');
        this.map.set('uaPassword', 'Пароль');

        this.map.set('enEmailRequired', 'Email is required');
        this.map.set('uaEmailRequired', 'Ел. Пошта обов`язкова!');

        this.map.set('enPasswordRequired', 'Password is required');
        this.map.set('uaPasswordRequired', 'Пароль обов`язковий!');

        this.map.set('enRegister', 'Register');
        this.map.set('uaRegister', 'Реєстрація');

        this.map.set('enFirst Name', 'First Name');
        this.map.set('uaFirst Name', 'Ім`я');

        this.map.set('enLast Name', 'Last Name');
        this.map.set('uaLast Name', 'Прізвище');

        this.map.set('enFirstNameRequired', 'First Name is required');
        this.map.set('uaFirstNameRequired', 'Ім`я обов`язкове!');

        this.map.set('enLast Name is required', 'Last Name is required');
        this.map.set('uaLast Name is required', 'Прізвище обов`язкове!');

        this.map.set('enPhone', 'Phone');
        this.map.set('uaPhone', 'Телефон');

        this.map.set('enPhone is required', 'Phone is required');
        this.map.set('uaPhone is required', 'Телефон обов`язковий!');

        this.map.set('enCancel', 'Cancel');
        this.map.set('uaCancel', 'Скасувати');

        this.map.set('enPassword must be at least 6 characters', 'Password must be at least 6 characters');
        this.map.set('uaPassword must be at least 6 characters', 'Мінімальна довжина паролю 6 символів');

        this.map.set('enAge', 'Age');
        this.map.set('uaAge', 'Вік');

        this.map.set('enExperience', 'Experience');
        this.map.set('uaExperience', 'Досвід');

        this.map.set('enyear(s)', 'year(s)');
        this.map.set('uayear(s)', 'рік(років)');

        this.map.set('enIssued by', 'Issued by');
        this.map.set('uaIssued by', 'Видано');

        this.map.set('enShow more', 'Show more');
        this.map.set('uaShow more', 'Розгорнути');

        this.map.set('enCollapse', 'Collapse');
        this.map.set('uaCollapse', 'Згорнути');

        this.map.set('enRead more', 'Read more');
        this.map.set('uaRead more', 'Детальніше');

        this.map.set('enAverage rating', 'Average rating');
        this.map.set('uaAverage rating', 'Середня оцінка');

        this.map.set('enFeedbacks', 'Feedbacks');
        this.map.set('uaFeedbacks', 'Відгуки');

        this.map.set('enitems per page', 'items per page');
        this.map.set('uaitems per page', 'одиниці на сторінку');

        this.map.set('enOrder a call back', 'Order a call back');
        this.map.set('uaOrder a call back', 'Замовити зворотній зв`язок');

        this.map.set('enFull Name', 'Full Name');
        this.map.set('uaFull Name', 'Ім`я та прізвище');

        this.map.set('enSelect services that you interested for', 'Select services that you interested for');
        this.map.set('uaSelect services that you interested for', 'Виберіть послуги, що вас зацікавили');

        this.map.set('enDate', 'Date');
        this.map.set('uaDate', 'Дата');

        this.map.set('enTime', 'Time');
        this.map.set('uaTime', 'Час');

        this.map.set('enSubmitOrder', 'Submit');
        this.map.set('uaSubmitOrder', 'Замовити');

        this.map.set('enLviv, Gorodocka 123a', 'Lviv, Gorodocka 123a');
        this.map.set('uaLviv, Gorodocka 123a', 'Львів, вул. Городоцька 123а');

        this.map.set('enSocial media', 'Social media');
        this.map.set('uaSocial media', 'Соціальні мережі');

        this.map.set('enWe work with the best that`s why we are the best', 'We work with the best that`s why we are the best');
        this.map.set('uaWe work with the best that`s why we are the best', 'Ми працюємо лише з найкращими - ось чому ми також найкращі!');

        this.map.set('enLinks', 'Links');
        this.map.set('uaLinks', 'Посилання');

        this.map.set('enAvatar url', 'Avatar url');
        this.map.set('uaAvatar url', 'Посилання на аватар');

        this.map.set('enChoose new avatar', 'Choose new avatar');
        this.map.set('uaChoose new avatar', 'Вибрати новий аватар');

        this.map.set('enEdit', 'Edit');
        this.map.set('uaEdit', 'Редагувати');

        this.map.set('enUpdate', 'Update');
        this.map.set('uaUpdate', 'Зберегти');

        this.map.set('enAdmin menu', 'Admin menu');
        this.map.set('uaAdmin menu', 'Адмін меню');

        this.map.set('enProjects', 'Projects');
        this.map.set('uaProjects', 'Проекти');

        this.map.set('enOrganizations', 'Organizations');
        this.map.set('uaOrganizations', 'Організації');

        this.map.set('enUsers', 'Users');
        this.map.set('uaUsers', 'Користувачі');

        this.map.set('enMain page media menu', 'Main page media menu');
        this.map.set('uaMain page media menu', 'Медіа меню');

        this.map.set('enSend email', 'Send email');
        this.map.set('uaSend email', 'Надіслати лист');

        this.map.set('enCallbacks menu', 'Callbacks menu');
        this.map.set('uaCallbacks menu', 'Зворотній зв`язок');

        this.map.set('enClient menu', 'Client menu');
        this.map.set('uaClient menu', 'Меню клієнта');

        this.map.set('enSupport', 'Support');
        this.map.set('uaSupport', 'Підтримка');

        this.map.set('enEmployee menu', 'Employee menu');
        this.map.set('uaEmployee menu', 'Меню працівника');

        this.map.set('enActive', 'Active');
        this.map.set('uaActive', 'Активні');

        this.map.set('enPending', 'Pending');
        this.map.set('uaPending', 'В очікуванні');

        this.map.set('enDone', 'Done');
        this.map.set('uaDone', 'Завершені');

        this.map.set('enCreate new project', 'Create new project');
        this.map.set('uaCreate new project', 'Створити новий проект');

        this.map.set('enChoose file', 'Choose file');
        this.map.set('uaChoose file', 'Вибрати файл');

        this.map.set('enProject name', 'Project name');
        this.map.set('uaProject name', 'Ім`я проекту');

        this.map.set('enDetails', 'Details');
        this.map.set('uaDetails', 'Детальніше');

        this.map.set('enMark as active', 'Mark as active');
        this.map.set('uaMark as active', 'Позначити активним');

        this.map.set('enMark as pending', 'Mark as pending');
        this.map.set('uaMark as pending', 'Позначити в стані очікування');

        this.map.set('enMark as done', 'Mark as done');
        this.map.set('uaMark as done', 'Позначити завершеним');

        this.map.set('enDelete', 'Delete');
        this.map.set('uaDelete', 'Видалити');

        this.map.set('enProject details', 'Project details');
        this.map.set('uaProject details', 'Деталі проекту');

        this.map.set('enOrganization', 'Organization');
        this.map.set('uaOrganization', 'Організація');

        this.map.set('enStatus', 'Status');
        this.map.set('uaStatus', 'Статус');

        this.map.set('enEvents', 'Events');
        this.map.set('uaEvents', 'Події');

        this.map.set('enEmployees', 'Employees');
        this.map.set('uaEmployees', 'Працівники');

        this.map.set('enAdd employees', 'Add employees');
        this.map.set('uaAdd employees', 'Додати працівника');

        this.map.set('enSubmit', 'Submit');
        this.map.set('uaSubmit', 'Зберегти');

        this.map.set('enCreate organization', 'Create organization');
        this.map.set('uaCreate organization', 'Створити організацію');

        this.map.set('enOrganization name', 'Organization name');
        this.map.set('uaOrganization name', 'Ім`я організації');

        this.map.set('enOrganization details', 'Organization details');
        this.map.set('uaOrganization details', 'Деталі організації');

        this.map.set('enFacilities', 'Facilities');
        this.map.set('uaFacilities', 'Об`єкти');

        this.map.set('enAdd Facility', 'Add Facility');
        this.map.set('uaAdd Facility', 'Додати об`єкт');

        this.map.set('enClients', 'Clients');
        this.map.set('uaClients', 'Клієнти');

        this.map.set('enAdd clients', 'Add clients');
        this.map.set('uaAdd clients', 'Додати клієнтів');

        this.map.set('enFacility name', 'Facility name');
        this.map.set('uaFacility name', 'Ім`я об`єкту');

        this.map.set('enFacility address', 'Facility address');
        this.map.set('uaFacility address', 'Адреса об`єкту');

        this.map.set('enAddress', 'Address');
        this.map.set('uaAddress', 'Адреса');

        this.map.set('enFacility', 'Facility');
        this.map.set('uaFacility', 'Об`єкт');

        this.map.set('enPerimeters', 'Perimeters');
        this.map.set('uaPerimeters', 'Периметри');

        this.map.set('enAdd perimeter', 'Add perimeter');
        this.map.set('uaAdd perimeter', 'Створити периметр');

        this.map.set('enPerimeter name', 'Perimeter name');
        this.map.set('uaPerimeter name', 'Ім`я периметру');

        this.map.set('enType', 'Type');
        this.map.set('uaType', 'Тип');

        this.map.set('enAssigned employee', 'Assigned employee');
        this.map.set('uaAssigned employee', 'Відповідальний працівник');

        this.map.set('enService', 'Service');
        this.map.set('uaService', 'Послуга');

        this.map.set('enДератизація', 'Deratization');
        this.map.set('uaДератизація', 'Дератизація');

        this.map.set('enДезінсекція', 'Disinsection');
        this.map.set('uaДезінсекція', 'Дезінсекція');

        this.map.set('enDisinsection', 'Disinsection');
        this.map.set('uaDisinsection', 'Дезінсекція');

        this.map.set('enДеодорація', 'Deodorization');
        this.map.set('uaДеодорація', 'Деодорація');

        this.map.set('enDeodorization', 'Deodorization');
        this.map.set('uaDeodorization', 'Деодорація');

        this.map.set('enDisinfection', 'Disinfection');
        this.map.set('uaDisinfection', 'Дезінфекція');

        this.map.set('enДезінфекція', 'Disinfection');
        this.map.set('uaДезінфекція', 'Дезінфекція');

        this.map.set('eninner', 'inner');
        this.map.set('uainner', 'внутрішній');

        this.map.set('enouter', 'outer');
        this.map.set('uaouter', 'зовнішній');

        this.map.set('enзовнішній', 'outer');
        this.map.set('uaзовнішній', 'зовнішній');

        this.map.set('enвнутрішній', 'inner');
        this.map.set('uaвнутрішній', 'внутрішній');

        this.map.set('enactive', 'active');
        this.map.set('uaactive', 'активний');

        this.map.set('enpending', 'pending');
        this.map.set('uapending', 'в очікуванні');

        this.map.set('endone', 'done');
        this.map.set('uadone', 'роботу виконано');

        this.map.set('enLast action date', 'Last action date');
        this.map.set('uaLast action date', 'Дата останньої дії');

        this.map.set('enMark as reviewed', 'Mark as reviewed');
        this.map.set('uaMark as reviewed', 'Позначити оглянутим');

        this.map.set('enPerimeter', 'Perimeter');
        this.map.set('uaPerimeter', 'Периметр');

        this.map.set('enTraps', 'Traps');
        this.map.set('uaTraps', 'Пастки');

        this.map.set('enCreate Trap', 'Create Trap');
        this.map.set('uaCreate Trap', 'Додати пастку');

        this.map.set('enTrap place', 'Trap place');
        this.map.set('uaTrap place', 'Розташування пастки');

        this.map.set('enReview every', 'Review every');
        this.map.set('uaReview every', 'Оглядати кожні');

        this.map.set('endays', 'days');
        this.map.set('uadays', 'днів');

        this.map.set('enComment', 'Comment');
        this.map.set('uaComment', 'Коментар');

        this.map.set('enNext review date', 'Next review date');
        this.map.set('uaNext review date', 'Дата запланованого огляду');

        this.map.set('enmechanical', 'mechanical');
        this.map.set('uamechanical', 'механічна');

        this.map.set('enмеханічна', 'mechanical');
        this.map.set('uaмеханічна', 'механічна');

        this.map.set('enклейова', 'glue');
        this.map.set('uaклейова', 'клейова');

        this.map.set('enok', 'ok');
        this.map.set('uaok', 'ок');

        this.map.set('enoverdue', 'overdue');
        this.map.set('uaoverdue', 'протерміновано');

        this.map.set('englue', 'glue');
        this.map.set('uaglue', 'клейова');

        this.map.set('enLast review date', 'Last review date');
        this.map.set('uaLast review date', 'Дата останнього огляду');

        this.map.set('enCreated at', 'Created at');
        this.map.set('uaCreated at', 'Створена');

        this.map.set('enExpire at', 'Expire at');
        this.map.set('uaExpire at', 'Термін дії до');

        this.map.set('enAssigned to', 'Assigned to');
        this.map.set('uaAssigned to', 'Відповідальний працівник');

        this.map.set('enAdmins', 'Admins');
        this.map.set('uaAdmins', 'Адміністратори');

        this.map.set('enCreate user', 'Create user');
        this.map.set('uaCreate user', 'Створити користувача');

        this.map.set('enUsers', 'Users');
        this.map.set('uaUsers', 'Користувачі');

        this.map.set('enClient', 'Client');
        this.map.set('uaClient', 'Клієнт');

        this.map.set('enEmployee', 'Employee');
        this.map.set('uaEmployee', 'Працівник');

        this.map.set('enAdmin', 'Admin');
        this.map.set('uaAdmin', 'Адміністратор');

        this.map.set('enIndex images', 'Index images');
        this.map.set('uaIndex images', 'Зображення');

        this.map.set('enTeam members', 'Team members');
        this.map.set('uaTeam members', 'Команда');

        this.map.set('enLicenses', 'Licenses');
        this.map.set('uaLicenses', 'Сертифікати');

        this.map.set('enAdd a new index image', 'Add a new index image');
        this.map.set('uaAdd a new index image', 'Додати нове зображення');

        this.map.set('enImage url', 'Image url');
        this.map.set('uaImage url', 'Посилання зображення');

        this.map.set('enTitle', 'Title');
        this.map.set('uaTitle', 'Заголовок');

        this.map.set('enDescription', 'Description');
        this.map.set('uaDescription', 'Опис');

        this.map.set('enAdd a new license', 'Add a new license');
        this.map.set('uaAdd a new license', 'Додати сертифікат');

        this.map.set('enName', 'Name');
        this.map.set('uaName', 'Назва');

        this.map.set('enReadMore url', 'ReadMore url');
        this.map.set('uaReadMore url', 'Посилання');

        this.map.set('enAdd a new team member', 'Add a new team member');
        this.map.set('uaAdd a new team member', 'Додати нового члена команди');

        this.map.set('enNameT', 'Name');
        this.map.set('uaNameT', 'Ім`я');

        this.map.set('enPosition', 'Position');
        this.map.set('uaPosition', 'Посада');

        this.map.set('enHey,&#10;&#10;Write there your message!', 'Hey,&#10;&#10;Write there your message!');
        this.map.set('uaHey,&#10;&#10;Write there your message!', 'Привіт,&#10;&#10;напиши своє повідомлення тут!');

        this.map.set('enCallbacks', 'Callbacks');
        this.map.set('uaCallbacks', 'Зворотній зв`язок');

        this.map.set('enAsk a question', 'Ask a question');
        this.map.set('uaAsk a question', 'Задай питання');

        this.map.set('enSubmitS', 'SubmitS');
        this.map.set('uaSubmitS', 'Відправити');

        this.map.set('enSelected', 'Selected');
        this.map.set('uaSelected', 'Вибрано');

        this.map.set('enHovered', 'Hovered');
        this.map.set('uaHovered', 'Наведено');

        this.map.set('enFeedback', 'Feedback');
        this.map.set('uaFeedback', 'Відгук');

        this.map.set('en', '');
        this.map.set('ua', '');

        this.map.set('en', '');
        this.map.set('ua', '');

        this.map.set('en', '');
        this.map.set('ua', '');

        this.map.set('en', '');
        this.map.set('ua', '');

        this.map.set('en', '');
        this.map.set('ua', '');

        this.map.set('en', '');
        this.map.set('ua', '');

        this.map.set('en', '');
        this.map.set('ua', '');
    }

    get(element: string): string {
        return this.map.get(this.language + element);
    }
}