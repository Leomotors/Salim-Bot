import { EmbedStyle } from "cocoa-discord-utils";
import { getElapsed } from "cocoa-discord-utils/meta";

export const style = new EmbedStyle({
    author: "invoker",
    color: 0xfee65c,
    footer: (ctx) => {
        return {
            text: `การตอบโต้ใช้เวลา ${getElapsed(
                ctx.createdAt
            )} มิลลิวินาที・เพื่อชาติ ศาสน์ กษัตริย์ ทำด้วยหัวใจ 💛💛💛`,
        };
    },
});
