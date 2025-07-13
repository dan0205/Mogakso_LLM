from fastapi import FastAPI, Depends
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
import redis.asyncio as aioredis

app = FastAPI()

# PostgreSQL 연결 설정
DATABASE_URL = "postgresql+asyncpg://user:password@localhost/dbname"
engine = create_async_engine(DATABASE_URL, echo=True)
AsyncSessionLocal = sessionmaker(
    bind=engine, class_=AsyncSession, expire_on_commit=False
)

# Redis 연결 설정
REDIS_URL = "redis://localhost"
redis = None

@app.on_event("startup")
async def startup():
    global redis
    redis = await aioredis.from_url(REDIS_URL, encoding="utf-8", decode_responses=True)

@app.on_event("shutdown")
async def shutdown():
    await redis.close()

# DB 세션 의존성
async def get_db():
    async with AsyncSessionLocal() as session:
        yield session

@app.get("/health")
async def health_check():
    pong = await redis.ping()
    return {"status": "ok", "redis": pong}
