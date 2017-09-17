## Omkeren

```csharp
interface IEnumerableDual<out T>
{
  IDisposable SetObserver(IObserver<T> observer);
}

interface IObserver<in T>
{
  void   OnNext(T value);
  void   OnCompleted();
  void   OnError(Exception exception);
}
```