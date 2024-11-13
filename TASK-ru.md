Необходимо реализовать сервис, которым:
- имеет хранилище городов (название города и дата его основания}
- хранит именованные списки городов из имеющихся в хранилище, которые создают пользователи (отдельный АР]-вызов}
- содержит \!=Б-Ргогеп9, отображающий и позволяющий управлять (добавление/редактирование/удаление городов) имеющимся пулом
городов
- содержит \!еБ-Ргог(епа, отображающий созданные пользоателями именованные списки
ДЛЯ ИНФОРМАЦИИ: пользователи работают в мобильных приложениях, которые зопращивают доступным пул городов и созданные ранее
именованные списки, а также постят на сервер новые создаваемые именованные списки через отдельный АР]-вызов
Таким образом, сервис хранит локально в базе данных, сохраняет от внешнего сервиса и отдает во внешний сервис необходимую
информацию посредством РЕЗТ-запросов (7504:
1. Получение всего пула имеющихся городов
Сервер хранит пул городов и отдает их во РгогИег по соответствующему СЕТ-запросу
Ргогиег 9 запрашивает пул городов при формировании пользователем нового именованного списка
1.1 Управление пулом доступных городов
Реализовать меБ-консоль (меб -РгогЦеп} для добавления, удаления и редактирования городов, содержащихся в пуле
Взаимодействие меБ-консоли с серверной логикой реализуется посредством ВЕЗА АР]
# Сохранение именовонного списка городов
При сохранении еписка городов соответствующая информеция отправляется Ргог ел -см на сервер по РОЗТ-запросу Сервер сохраняет
полученную информацию в локальном хранилище
Параметры именованного списка городов
-- название краткое
-- название полное
-- цвет ярлыка
-- привязка к выбранным городам из доступного пула
3. Получение созданных именованных списков
При запуске меБ-консоль [ммеБ-Ргом ег} запросит с сервера СЕТ-запросом ранее созданные именовонные списки городов
Тахнические требования:
- База данных: MongoDb
- Язык кода. Турезспри
- ВЕЗТ АР| (73О0Н)
Результат выполнения задания предоставить в виде проекта на ойнУуБ\ аЧаь
Будет плюсом, если реализованный Васкег9 будет развернут на работоющем хосте и будет предоставлен проект в розупоп для
проверки реализованного АР]
Пул городов
< [р Хх } |
Париж Ш век дон. >. # т
Вена 147 год #
Берлин 1237 год #
Варшава, 1321 год #
Милан 1899 год #
(+) ”
РУ
Списки городов
< [р Хх } | ] & ›
С ЕВА Франция []
АТ Австрия
Г) А2 Азия
2
и
Спискок Австрия
< [р Хх } | ] & ›
но
Вена 1147 год “
Линц 15 год дон э. #
Зальсвург 1077 год # 