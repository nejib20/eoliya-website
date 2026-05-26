export default async ({ strapi }) => {
  // Configuration des permissions par défaut au démarrage

  // Liste des Content Types publics en lecture seule
  const publicContentTypes = [
    'api::service.service',
    'api::projet.projet',
    'api::team-member.team-member',
    'api::article.article',
    'api::testimonial.testimonial',
    'api::setting.setting',
  ];

  // Récupérer le rôle Public
  const publicRole = await strapi
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (publicRole) {
    // Configurer les permissions pour chaque Content Type
    for (const contentType of publicContentTypes) {
      const permissions = await strapi
        .query('plugin::users-permissions.permission')
        .findMany({
          where: {
            role: publicRole.id,
            action: {
              $in: ['find', 'findOne'],
            },
          },
        });

      // Activer les permissions find et findOne pour le rôle Public
      for (const permission of permissions) {
        if (contentType.includes(permission.action.split('.')[0])) {
          await strapi
            .query('plugin::users-permissions.permission')
            .update({
              where: { id: permission.id },
              data: { enabled: true },
            });
        }
      }
    }

    strapi.log.info('Permissions publiques configurées avec succès');
  }

  // Le formulaire de contact doit permettre la création en public
  const contactPermissions = await strapi
    .query('plugin::users-permissions.permission')
    .findMany({
      where: {
        role: publicRole.id,
        action: 'api::contact.contact.create',
      },
    });

  for (const permission of contactPermissions) {
    await strapi
      .query('plugin::users-permissions.permission')
      .update({
        where: { id: permission.id },
        data: { enabled: true },
      });
  }
};
