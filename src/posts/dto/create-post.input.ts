import { Field, InputType } from "@nestjs/graphql"
import { IsInt, IsNotEmpty, IsNumber } from "class-validator"

@InputType()
export class CreatePostInput {

    @IsNotEmpty()
    @Field()
    title: string

    @Field({ nullable: true })
    content?: string

    @IsNumber()
    @IsInt()
    @Field()
    authorId: number
}