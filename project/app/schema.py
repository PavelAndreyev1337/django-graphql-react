import graphene
from graphene_django import DjangoObjectType

from app.models import UserModel

class UserType(DjangoObjectType):
    class Meta:
        model=UserModel

class Query(graphene.ObjectType):
    users=graphene.List(UserType)

    def resolve_users(self,info):
        return UserModel.objects.all()

# mutations

class CreateUser(graphene.Mutation):
    id=graphene.Int()
    name=graphene.String()
    last_name=graphene.String()

    class Arguments:
        name=graphene.String()
        last_name=graphene.String()

    def mutate(self,info,name,last_name):
        user=UserModel(name=name,last_name=last_name)
        user.save()

        return CreateUser(
            id=user.id,
            name=user.name,
            last_name=user.last_name,
        )

class Mutation(graphene.ObjectType):
    create_user=CreateUser.Field()

schema=graphene.Schema(query=Query,mutation=Mutation)

